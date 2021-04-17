package com.example.hightech.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.swing.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.Set;


@Entity
@Table(name ="products")
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotEmpty
    private String title;
    @NotEmpty
    private String imgName;
    @NotEmpty
    private double price;
    @NotEmpty
    private String company;
    @NotEmpty
    private String info;
    @NotEmpty
    private boolean inCart;
    @NotEmpty
    private int count;
    @NotEmpty
    private int total;


    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "card_id")
    private Cart carts;



    public Product(@NotEmpty String title, @NotEmpty String imgName, @NotEmpty double price, @NotEmpty String company, @NotEmpty String info, @NotEmpty boolean inCart, @NotEmpty int count, @NotEmpty int total, Cart carts) {
        this.title = title;
        this.imgName = "./img/"+imgName;
        this.price = price;
        this.company = company;
        this.info = info;
        this.inCart = inCart;
        this.count = count;
        this.total = total;
        this.carts = carts;
    }

    public Product() {
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getImgName() {
        return imgName;
    }
    public void setImgName(String imgIcon) {
        this.imgName = imgIcon;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public String getCompany() {
        return company;
    }
    public void setCompany(String company) {
        this.company = company;
    }
    public String getInfo() {
        return info;
    }
    public void setInfo(String info) {
        this.info = info;
    }
    public boolean isInCart() {
        return inCart;
    }
    public void setInCart(boolean inCart) {
        this.inCart = inCart;
    }
    public int getCount() {
        return count;
    }
    public void setCount(int count) {
        this.count = count;
    }
    public int getTotal() {
        return total;
    }
    public void setTotal(int total) {
        this.total = total;
    }

    public Cart getCarts() {
        return carts;
    }

    public void setCarts(Cart carts) {
        this.carts = carts;
    }
}
