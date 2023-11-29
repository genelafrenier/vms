package com.vms.sms.repository;

import com.vms.sms.model.Volunteer;
import com.vms.sms.model.VolunteerDetails;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface VolunteerRepository extends CrudRepository<Volunteer, Integer>{
    public Iterable<Volunteer> getVolunteersByEventId(int event_id);

    //get volunteer events by student id where date is greater than current date
    //query for current events portion of User Dashboard, pass in UserID field
    @Query("SELECT new com.vms.sms.model.VolunteerDetails(v.id, v.studentId, v.eventId, v.rating, e.organizerId, e.eventName, e.eventDescription, e.eventDate, e.eventTime, e.eventLocation) FROM Volunteer v JOIN Event e ON v.eventId = e.id WHERE v.studentId = :student_id AND e.eventDate >= CURDATE()")
    public Iterable<VolunteerDetails> getCurrentVolunteerByStudentId(int student_id);

    //get volunteer events by student id where date is less than current date
    //query for past events portion of User Dashboard, pass in userID field
  @Query("SELECT new com.vms.sms.model.VolunteerDetails(v.id, v.studentId, v.eventId, v.rating, e.organizerId, e.eventName, e.eventDescription, e.eventDate, e.eventTime, e.eventLocation) FROM Volunteer v JOIN Event e ON v.eventId = e.id WHERE v.studentId = :student_id AND e.eventDate < CURDATE()")
    public Iterable<VolunteerDetails> getVolunteerHistoryByStudentId(int student_id);
    
    boolean existsByStudentIdAndEventId(int studentId, int eventId);
    
}
