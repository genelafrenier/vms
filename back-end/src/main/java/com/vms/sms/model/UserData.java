package com.vms.sms.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore; //used to ignore password

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "user")
@Entity
public class UserData {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private @Getter @Setter int id;
    @Column(unique = true)
    private @Getter @Setter int username;
    private @Getter @Setter String role;
    private @Getter @Setter String firstName;
    private @Getter @Setter String lastName;
    private @Getter @Setter String email;
    private @Getter @Setter String phone;
    private @Getter @Setter String about;
    private @Getter @Setter String dept;
    private @Getter @Setter String skills;

    @JsonIgnore
    public String getPassword() {
        return null;
    }

}
