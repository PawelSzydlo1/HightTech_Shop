package com.example.hightech.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
    private double price;
    @NotEmpty
    private String company;
    @NotEmpty
    @Lob
    @Column(name = "info", length = 1500)
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

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "file_id", referencedColumnName = "id")
    private ProductImage productImage;


    public Product(@NotEmpty String title, @NotEmpty ProductImage productImage, @NotEmpty double price, @NotEmpty String company, @NotEmpty String info, @NotEmpty String category, Cart cart) {
        this.title = title;
        this.productImage=productImage;
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

    public void setTotal(double total) {
        this.total = total;
    }

    public ProductImage getProductImage() {
        return productImage;
    }

    public void setProductImage(ProductImage productImage) {
        this.productImage = productImage;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", price=" + price +
                ", company='" + company + '\'' +
                ", info='" + info + '\'' +
                ", category='" + category + '\'' +
                ", inCart=" + inCart +
                ", count=" + count +
                ", total=" + total +
                ", cart=" + cart +
                ", productImage=" + productImage +
                '}';
    }
}
