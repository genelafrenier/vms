package com.vms.sms.repository;

import org.springframework.data.repository.CrudRepository;


import com.vms.sms.model.Question;

public interface QuestionRepository extends CrudRepository<Question, Integer> {

}

