package com.example.hightech.controllers;
import com.example.hightech.models.User;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id){
        return new User("Pawel","Szydlo","psz0587@gmail.com", id);
    }







}
