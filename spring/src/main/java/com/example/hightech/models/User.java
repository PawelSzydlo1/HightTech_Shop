package com.example.hightech.models;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

    private String name;
    private String surname;
    private String email;
    private Long id;



    public User(String name, String surname, String email,Long id) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.id=id;
    }


    public User() {

    }

    @Id
    public Long getId() {
        return id;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
