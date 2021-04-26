package com.example.hightech.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.lang.Nullable;

import javax.persistence.*;

import javax.validation.constraints.NotEmpty;


@Entity
@Table(name = "products")
public class Product {
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
    private String category;


    private boolean inCart;

    private int count;

    private double total;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "card_id")
    private Cart cart;


    public Product(@NotEmpty String title, @NotEmpty String imgName, @NotEmpty double price, @NotEmpty String company, @NotEmpty String info, @NotEmpty String category, Cart cart) {
        this.title = title;
        this.imgName = "img/" + imgName;
        this.price = price;
        this.company = company;
        this.info = info;
        this.category = category;
        this.cart = cart;
        this.inCart = false;
        this.count = 0;
        this.total = 0;
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

    public double getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", imgName='" + imgName + '\'' +
                ", price=" + price +
                ", company='" + company + '\'' +
                ", info='" + info + '\'' +
                ", category='" + category + '\'' +
                ", inCart=" + inCart +
                ", count=" + count +
                ", total=" + total +
                ", cart=" + cart +
                '}';
    }
}
