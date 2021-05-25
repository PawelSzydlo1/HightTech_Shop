package com.example.hightech.repository;

import com.example.hightech.models.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product,Long> {
    @Transactional
    @Query(nativeQuery = true,value = "SELECT * FROM products WHERE cart_id =(SELECT id FROM carts WHERE client_id = (SELECT id FROM users WHERE role = 'ADMIN'))")
    List<Product> getProductsByClient_Role();
   @Transactional
    @Query(nativeQuery = true,value = "SELECT * FROM products WHERE cart_id =(SELECT id FROM carts WHERE client_id =?1)")
    List<Product> getProductsByCart_Client_Id(Long id);

    @Query(nativeQuery = true,value = "SELECT p.category FROM products AS p GROUP BY p.category")
    List<String> getAllCategory();



}
