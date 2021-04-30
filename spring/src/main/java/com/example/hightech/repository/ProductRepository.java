package com.example.hightech.repository;

import com.example.hightech.models.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product,Long> {


    Product findProductsByCart_Id(Long id);

    @Query(nativeQuery = true,value = "SELECT p.category FROM products AS p GROUP BY p.category")
    List<String> getAllCategory();

}
