package com.example.hightech.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.swing.*;
import java.io.Serializable;


@Entity
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String imgName;
    private double price;
    private String company;
    private String info;
    private boolean inCart;
    private int count;
    private int total;

    public Product(String title, String imgName, double price, String company, String info, boolean inCart, int count, int total) {
        this.title = title;
        this.imgName = "img/" + imgName;
        this.price = price;
        this.company = company;
        this.info = info;
        this.inCart = inCart;
        this.count = count;
        this.total = total;
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
}
