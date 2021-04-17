package com.example.hightech.controllers;

import com.example.hightech.models.Cart;
import com.example.hightech.models.Product;
import com.example.hightech.models.User;
import com.example.hightech.repository.CartRepository;
import com.example.hightech.repository.ProductRepository;
import com.example.hightech.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    private  ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/productList")
    public Iterable<Product> runProductRepository(){
        return productRepository.findAll();
    }

    @GetMapping("/productListAdd")
    public void addProductList() {
        User user=new User("Pawel","Sz","pemail@gmail.com","123456");
        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt);
        userRepository.save(user);

        Cart cart = new Cart(2.0,user);
        cartRepository.save(cart);

        Product product = new Product("Google Pixel - Black","product-1.png",10, "GOOGLE","OPIS",false,0,0,cart);
        productRepository.save(product);
    }
}