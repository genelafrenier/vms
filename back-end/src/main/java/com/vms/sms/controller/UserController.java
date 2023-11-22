package com.vms.sms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.vms.sms.model.User;
import com.vms.sms.repository.UserRepository;

import java.util.Optional;

import jakarta.servlet.http.HttpSession;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User loginUser, HttpSession session) {
        Optional<User> optionalUser = userRepository.findByUsername(loginUser.getUsername());

        if (optionalUser.isPresent() && optionalUser.get().getPassword().equals(loginUser.getPassword())) {
            session.setAttribute("user", optionalUser.get());
            System.out.println("Login successful");
            return ResponseEntity.ok("Login successful");
        } else {
            System.out.println("Invalid credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @GetMapping("/current-user")
    public @ResponseBody String currentUser(HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user == null) {
            return "";
        }
        else{
            return user.getUsername();
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (!userRepository.existsByUsername(user.getUsername())) {
            userRepository.save(user);
            return ResponseEntity.ok("Registration successful");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
        }
    }

    @GetMapping("/admin")
    public ResponseEntity<String> adminEndpoint(HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user != null && "ADMIN".equals(user.getRole())) {
            return ResponseEntity.ok("Admin endpoint accessed");
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied");
        }
    }

    @GetMapping("/user")
    public ResponseEntity<String> userEndpoint(HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user != null && "USER".equals(user.getRole())) {
            return ResponseEntity.ok("User endpoint accessed");
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();   
        return ResponseEntity.ok("Logout successful");
    }

}
