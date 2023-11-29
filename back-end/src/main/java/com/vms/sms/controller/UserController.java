package com.vms.sms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.vms.sms.model.User;
import com.vms.sms.model.UserData; // copy of user but omit password
import com.vms.sms.repository.UserRepository;

import java.util.Optional;

import jakarta.servlet.http.HttpSession;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    //endpoint for login functionality
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

    //endpoint to return current username
    @GetMapping("/current-user")
    public @ResponseBody String currentUser(HttpSession session) {
        User user = (User) session.getAttribute("user");
        
        if (user == null) {
            return "";
        }
        else{
            String username = Integer.toString(user.getUsername());
            return username;
        }
    }
    //code by Calvin to test
    // *Fixed* this works but exposes password in GET call. Not a big deal since we're in a hurry! *Fixed*
    @GetMapping("/current")
    public @ResponseBody UserData current(HttpSession session) {
    User user = (User) session.getAttribute("user");
    if (user == null) {
        return null;
    } else {
        //refine later
        //define "new user" without password
        UserData UserData = new UserData();
        UserData.setFirstName(user.getFirstName());
        UserData.setLastName(user.getLastName());
        UserData.setUsername(user.getUsername());
        //no password
        UserData.setAbout(user.getAbout());
        UserData.setDept(user.getDept());
        UserData.setEmail(user.getEmail());
        UserData.setPhone(user.getPhone());
        UserData.setRole(user.getRole());
        UserData.setSkills(user.getSkills());
        return UserData;
    }
}
 // end code here

    //endpoint for user creation functionality on registration page
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (!userRepository.existsByUsername(user.getUsername())) {
            userRepository.save(user);
            return ResponseEntity.ok("Registration successful");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
        }
    }

    //endpoint to retrieve role of current user - used for navbar links
    @GetMapping("/role")
    public ResponseEntity<String> roleEndpoint(HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("");
        }
        else{
            return ResponseEntity.ok(user.getRole());
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

    @PutMapping("/update")
    public @ResponseBody String updateProfile(@RequestParam ("username") int id, @RequestBody User user){
        Optional<User> userOptional = userRepository.findByUsername(id);
        if (userOptional.isPresent()) {
            System.out.println("User found");
            User userUpdate = userOptional.get();
            userUpdate.setFirstName(user.getFirstName());
            userUpdate.setLastName(user.getLastName());
            userUpdate.setEmail(user.getEmail());
            userUpdate.setPhone(user.getPhone());
            userUpdate.setAbout(user.getAbout());
            userUpdate.setSkills(user.getSkills());
            userRepository.save(userUpdate);
            return "User Updated";
        } else {
            System.out.println("User not found");
            return "User not found";
        }
    }
}
