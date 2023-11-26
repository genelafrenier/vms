package com.vms.sms.repository;

import org.springframework.data.repository.CrudRepository;


import com.vms.sms.model.Event;

public interface EventRepository extends CrudRepository<Event, Integer> {

    public Iterable<Event> getEventsByOrganizerId(int organizer_id);



}