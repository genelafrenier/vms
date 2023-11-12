package com.vms.sms.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int studentId;
    private int organizerId;
    private String name;
    private String email;
    private String password;
    private String phone;
    private String aboutMe;
    private String skills;


    public User(int id, int studentId, int organizerId, String name, String email, String password, String phone, String aboutMe, String skills) {
        this.name = name;
        this.studentId = studentId;
        this.organizerId = organizerId;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.aboutMe = aboutMe;
        this.skills = skills;
    }

    public User() {
    }

    public int getId() {
        return id;
    }

    public int getStudentId() {
        return studentId;
    }

    public int getOrganizerId() {
        return organizerId;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getAboutMe() {
        return aboutMe;
    }

    public String getSkills() {
        return skills;
    }

    public String getPhone() {
        return phone;
    }

    public String getPassword() {
        return password;
    }

    public void setId(int id) { this.id = id; }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public void setOrganizerId(int organizerId) {
        this.organizerId = organizerId;
    }

    public void setAboutMe(String aboutMe) {
        this.aboutMe = aboutMe;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setPassword(String password) { this.password = password; }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) { this.email = email; }

}