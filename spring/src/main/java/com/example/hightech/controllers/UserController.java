package com.example.hightech.controllers;

import com.example.hightech.models.User;
import com.example.hightech.repository.UserRepository;
import com.example.hightech.security.JsonWebTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class UserController {

    private final UserRepository userRepository;
    private final JsonWebTokenProvider jsonWebTokenProvider;


    @Autowired
    public UserController(UserRepository userRepository, JsonWebTokenProvider jsonWebTokenProvider) {
        this.userRepository = userRepository;
        this.jsonWebTokenProvider = jsonWebTokenProvider;
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
    public ResponseEntity<?> loggedUser(@RequestBody User data){
        System.out.println(data.getEmail() + " " + data.getPassword());

        String salt = userRepository.getSaltByEmail(data.getEmail());

        if(salt==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        User loginUser = userRepository.getUserByEmailAndPassword(
                data.getEmail(),
                BCrypt.hashpw(
                        data.getPassword(),
                        salt
                )
        );

        if(loginUser==null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);


        Pair<Long, String> userIdWithTokenPair = Pair.of(loginUser.getId(), jsonWebTokenProvider.generateToken(loginUser));
        return new ResponseEntity<>(userIdWithTokenPair, HttpStatus.OK);

    }


    @GetMapping("/useradd")
    public void adaUser() {
        User user = new User("Pawel","Szydlo","psz0587@gmail.com","aaaaaaaa");
        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt);
        userRepository.save(user);
    }



}
