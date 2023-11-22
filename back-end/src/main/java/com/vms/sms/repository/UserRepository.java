package com.vms.sms.repository;

import org.springframework.data.repository.CrudRepository;

import com.vms.sms.model.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, String> {
    Optional<User> findByUsername(String username);
    boolean existsByUsername(String username);
}