package com.vms.sms.repository;

import com.vms.sms.model.Requests;
import org.springframework.data.repository.CrudRepository;

public interface RequestRepository extends CrudRepository<Requests, Integer> {
    public Iterable<Requests> getRequestsByEventId(int event_id);
    
}
