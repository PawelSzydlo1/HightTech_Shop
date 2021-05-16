package com.example.hightech.controllers;

import com.example.hightech.models.Cart;

import com.example.hightech.models.User;
import com.example.hightech.repository.CartRepository;
import com.example.hightech.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class CartController {

    @Autowired
    private final CartRepository cartRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public CartController(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @GetMapping("/cartList")
    public Iterable<Cart> runProductRepository(){
        return cartRepository.findAll();
    }

    @GetMapping("/cartAdd")
    public void adaCart() {
        int adminId=1;
        User user=userRepository.findById((long) adminId).orElse(null);
        //System.out.println("user->" + user);

        Cart cart = new Cart(0.0,user);
        cartRepository.save(cart);
    }

    @GetMapping("/cartList/{id}")
    public Cart getCartById(@PathVariable("id") Long id){

        return cartRepository.findCartByClient_Id(id);

    }

}
