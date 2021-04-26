package com.example.hightech.repository;

import com.example.hightech.models.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product,Long> {

    //Product findProductsByCart(Long id);
    Product findProductsByCart_Id(Long id);
}
