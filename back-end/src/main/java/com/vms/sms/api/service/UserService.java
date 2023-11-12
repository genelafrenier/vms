package com.vms.sms.api.service;

import com.vms.sms.api.repository.UserRepository;
import com.vms.sms.api.model.User;
import com.vms.sms.api.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.ArrayList;


@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<User>();
        userRepository.findAll().forEach(user -> users.add(user));
        return users;
    }

    public User getUser(int id) {
        return userRepository.findById(id).get();
        
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    public void updateUser(User user, int id) {
        userRepository.save(user);
    }
}
