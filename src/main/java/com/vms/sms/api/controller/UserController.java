package com.vms.sms.api.controller;

import com.vms.sms.api.model.User;
import com.vms.sms.api.repository.UserRepository;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;


@RestController

class UserController{
    
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public @ResponseBody Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user")
    public @ResponseBody User getUser(@RequestParam("id") int id){
        return userRepository.findById(id).get();
    }

    @PostMapping("/user")
    public @ResponseBody String saveUser(@RequestBody User user){
        userRepository.save(user);
        return "User saved";
    }

    @DeleteMapping("/user")
    public @ResponseBody String deleteUser(@RequestParam("id") int id){
        userRepository.deleteById(id);
        return "User deleted";
    }

    @PutMapping("/user")
    public @ResponseBody String updateUser(@RequestBody User user, @RequestParam("id") int id){
        userRepository.save(user);
        return "User updated";
    }



}




