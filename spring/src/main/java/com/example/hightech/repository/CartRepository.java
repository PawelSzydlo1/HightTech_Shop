package com.example.hightech.repository;

import com.example.hightech.models.Cart;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository  extends CrudRepository<Cart,Long> {
    Cart findCartById(Long id);
    Cart findCartByClient_Id(Long id);
}
