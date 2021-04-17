package com.example.hightech.controllers;

import com.example.hightech.models.User;
import com.example.hightech.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private UserRepository userRepository;


    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @GetMapping("/users")
    public Iterable<User> runUserRepository(){
        return userRepository.findAll();
    }

    @GetMapping(value = "/users/{email}")
    @Nullable
    public User getUser(@PathVariable("email") String email){
        Optional<User> optionalUser = Optional.ofNullable(userRepository.findByEmail(email));
        return optionalUser.orElse(null);
    }

    @PostMapping(value = "/registration")
    public void registration(@RequestBody User user){

        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt);
        userRepository.save(user);
    }

    @PostMapping(value = "/login")
    public User loggedUser(@RequestBody User data){
        System.out.println(data.getEmail() + " " + data.getPassword());

        String salt = userRepository.getSaltByEmail(data.getEmail());

        if(salt==null){
            return null;
        }

        return userRepository.getUserByEmailAndPassword(
                data.getEmail(),
                BCrypt.hashpw(
                        data.getPassword(),
                        salt
                )
        );
    }


    @GetMapping("/add_user")
    public void adaUser() {
        User user = new User("Pawel","Szydlo","P@gmail.com","111111");
        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt);
        userRepository.save(user);
    }



}
