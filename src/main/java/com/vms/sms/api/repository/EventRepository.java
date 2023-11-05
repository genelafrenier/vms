package com.vms.sms.api.repository;

import org.springframework.data.repository.CrudRepository;
import com.vms.sms.api.model.Event;

public interface EventRepository extends CrudRepository<Event, Integer> {

}