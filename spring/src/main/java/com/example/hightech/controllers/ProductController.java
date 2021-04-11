package com.example.hightech.controllers;

import com.example.hightech.models.Product;

import com.example.hightech.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/productList")
    public Iterable<Product> runCartRepository(){
        return productRepository.findAll();
    }

    @GetMapping("/productListAdd")
    public void addCartRepository() {
        Product product = new Product("Google Pixel - Black","product-1.png",10, "GOOGLE","OPIS",false,0,0);
        productRepository.save(product);
    }
}