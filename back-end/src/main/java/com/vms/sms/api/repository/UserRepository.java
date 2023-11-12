package com.vms.sms.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.vms.sms.api.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}