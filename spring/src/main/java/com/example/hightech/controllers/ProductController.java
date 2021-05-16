package com.example.hightech.controllers;

import com.example.hightech.models.Cart;
import com.example.hightech.models.Product;
import com.example.hightech.repository.CartRepository;
import com.example.hightech.repository.ProductRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class ProductController {
    private final ProductRepository productRepository;
    private final CartRepository cartRepository;


    @Autowired
    public ProductController(ProductRepository productRepository, CartRepository cartRepository) {
        this.productRepository = productRepository;
        this.cartRepository = cartRepository;

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

    @GetMapping("/productCategory")
    public List<String> getProductsCategory(){
        return productRepository.getAllCategory();
    }



    @PostMapping("/productAdd")
    public void addProduct(@RequestBody JsonNode jsonProduct) {

        //System.out.println(jsonProduct);
        Cart cart = cartRepository.findCartByClient_Id((long)1);

        Product product= new Product(
                        jsonProduct.get("title").asText(),
                        jsonProduct.get("productImage").asText(),
                        jsonProduct.get("price").asDouble(),
                        jsonProduct.get("company").asText(),
                        jsonProduct.get("info").asText(),
                        jsonProduct.get("category").asText(),
                        cart

        );
        productRepository.save(product);


    }


    @GetMapping(value = "/productList/file/{id}")
    public String getFile(@PathVariable("id") Long id){
        Product product =productRepository.findById(id).orElse(null);

        assert product != null;
        //System.out.println(product.getProductImage());
        return product.getProductImage();

    }




    @GetMapping(value = "/changecount/{id}/{number}")
    public void changeCount(@PathVariable("id") Long id, @PathVariable ("number") int number){
        Product product = productRepository.findById(id).orElse(null);
        assert product != null;
        product.setCount(product.getCount()+number);
        product.setTotal((product.getPrice())*(product.getCount()));

        productRepository.save(product);
    }


}