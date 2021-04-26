package com.example.hightech.controllers;

import com.example.hightech.models.Cart;
import com.example.hightech.models.Product;
import com.example.hightech.models.User;
import com.example.hightech.repository.CartRepository;
import com.example.hightech.repository.ProductRepository;
import com.example.hightech.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    private final ProductRepository productRepository;
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


    @GetMapping("/productList/{id}")
    public Product getCartById(@PathVariable("id") Long id){
        Optional<Product> optionalCart = Optional.ofNullable(productRepository.findProductsByCart_Id(id));
        return optionalCart.orElse(null);

    }




    @PostMapping("/productAdd")
    public void addProduct(@RequestBody Product product) {

        System.out.println(product.toString());

        Cart cart = cartRepository.findCartByClient_Id((long)1);

        product.setCart(cart);
        product.setImgName("img/"+product.getImgName());

        productRepository.save(product);


    }
}