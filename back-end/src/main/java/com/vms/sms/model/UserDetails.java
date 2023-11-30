package com.vms.sms.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserDetails {
    
    private @Getter @Setter int username;
    private @Getter @Setter String role;
    private @Getter @Setter String firstName;
    private @Getter @Setter String lastName;
    private @Getter @Setter String email;
    private @Getter @Setter String phone;
    private @Getter @Setter String about;
    private @Getter @Setter String dept;
    private @Getter @Setter String skills;


}
