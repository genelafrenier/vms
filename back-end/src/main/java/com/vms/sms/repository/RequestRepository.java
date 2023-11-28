package com.vms.sms.repository;

import com.vms.sms.model.Requests;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import com.vms.sms.model.RequestDetails;
import com.vms.sms.model.User;

public interface RequestRepository extends CrudRepository<Requests, Integer> {

    @Query("SELECT r.id, r.eventId, r.studentId, u.firstName, u.lastName, u.email, u.phone FROM Requests r JOIN User u ON r.studentId = u.username WHERE r.eventId = ?1")
    public Iterable<RequestDetails> getRequestsByEventId(int event_id);
    
}
