package com.example.hightech.controllers;

import com.example.hightech.models.Cart;
import com.example.hightech.models.ProductImage;
import com.example.hightech.models.Product;
import com.example.hightech.repository.CartRepository;
import com.example.hightech.repository.ProductImageRepository;
import com.example.hightech.repository.ProductRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.constraints.NotNull;
import java.io.IOException;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    private final ProductRepository productRepository;
    private final CartRepository cartRepository;
    private final ProductImageRepository productImageRepository;

    private ProductImage productImage;
    @Autowired
    public ProductController(ProductRepository productRepository, CartRepository cartRepository, ProductImageRepository productImageRepository) {
        this.productRepository = productRepository;
        this.cartRepository = cartRepository;
        this.productImageRepository = productImageRepository;
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

        System.out.println(jsonProduct);
        Cart cart = cartRepository.findCartByClient_Id((long)1);

        Product product= new Product(
                        jsonProduct.get("title").asText(),
                        productImage,
                        jsonProduct.get("price").asDouble(),
                        jsonProduct.get("company").asText(),
                        jsonProduct.get("info").asText(),
                        jsonProduct.get("category").asText(),
                        cart

        );

        //System.out.println(product);
        productRepository.save(product);


    }

    @PostMapping(value = "/addFile")
    public ResponseEntity<Void> addFile(@NotNull @RequestParam("file") MultipartFile multipartFile) throws IOException {
        productImage = new ProductImage(multipartFile.getOriginalFilename(), multipartFile.getContentType(),  multipartFile.getBytes());

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();
        return ResponseEntity.created(location).build();
    }


    @GetMapping(value = "/productList/file/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable("id") Long id){

        ProductImage productImg  = productImageRepository.findById(id).get();

        HttpHeaders header = new HttpHeaders();



        header.setContentType(MediaType.valueOf(productImg.getContentType()));
        header.setContentLength(productImg.getData().length);
        header.set("Content-Disposition", "attachment; filename=" + productImg.getFileName());

        return new ResponseEntity<>(productImg.getData(), header, HttpStatus.OK);
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