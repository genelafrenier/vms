package com.vms.sms.repository;

import com.vms.sms.model.Requests;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;

import com.vms.sms.model.Event;
import com.vms.sms.model.RequestDetails;

public interface RequestRepository extends CrudRepository<Requests, Integer> {

    @Query("SELECT new com.vms.sms.model.RequestDetails(r.id, r.eventId, r.studentId, u.firstName, u.lastName, u.email, u.phone, u.skills) FROM Requests r JOIN User u ON r.studentId = u.username WHERE r.approvalStatus = 'Pending' AND r.eventId = :event_id")
    public Iterable<RequestDetails> getRequestsByEventId(int event_id);
    
    boolean existsByStudentIdAndEventId(int studentId, int eventId);

    public Iterable<Event> getEventsBystudentId(int student_id);

}
