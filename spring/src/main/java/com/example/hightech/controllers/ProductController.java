package com.example.hightech.controllers;

import com.example.hightech.models.Cart;
import com.example.hightech.models.Product;
import com.example.hightech.repository.CartRepository;
import com.example.hightech.repository.ProductRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

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
    public List<Product> runProductRepository(){

        return productRepository.getProductsByClient_Role();
    }


    @GetMapping("/productList/{id}")
    public List<Product> getCartById(@PathVariable("id") Long id){
        return productRepository.getProductsByCart_Client_Id(id);

    }

    @GetMapping("/productCategory")
    public List<String> getProductsCategory(){
        return productRepository.getAllCategory();
    }



    @PostMapping("/productAdd")
    public void addProduct(@RequestBody JsonNode jsonProduct) {

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


    @GetMapping(value = "/changecart/{idProduct}/{idUser}")
    public void changeCart(@PathVariable("idProduct") Long idProduct,@PathVariable("idUser") Long idUser){
        Product p = productRepository.findById(idProduct).orElse(null);
        Cart cart = cartRepository.findCartByClient_Id(idUser);
        assert p != null;
        Product product1 =new Product(p.getTitle(),p.getProductImage(),p.getPrice(),p.getCompany(),p.getInfo(),p.getCategory(),cart);
        product1.setInCart(true);
        product1.setCount(product1.getCount()+1);
        product1.setTotal(product1.getPrice()*product1.getCount());
        productRepository.save(product1);
    }


    @DeleteMapping(value = "/deleteProduct/{id}")
    public void  deleteProduct(@PathVariable("id") Long id){
        Product product = productRepository.findById(id).orElse(null);
        assert product != null;
        productRepository.delete(product);
    }

}