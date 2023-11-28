package com.vms.sms.repository;

import com.vms.sms.model.Volunteer;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface VolunteerRepository extends CrudRepository<Volunteer, Integer>{
    public Iterable<Volunteer> getVolunteersByEventId(int event_id);

    //get volunteer events by student id where date is greater than current date
    //query for current events portion of User Dashboard, pass in UserID field
    @Query(nativeQuery = true, value = "SELECT * FROM Volunteer v, Event e WHERE v.studentId = ?1 AND e.eventDate >= CURDATE()")
    public Iterable<Volunteer> getCurrentVolunteerByStudentId(int student_id);

    //get volunteer events by student id where date is less than current date
    //query for past events portion of User Dashboard, pass in userID field
    @Query(nativeQuery = true, value = "SELECT * FROM Volunteer v, Event e, WHERE v.studentId = ?1 AND e.eventDate < CURDATE()")
    public Iterable<Volunteer> getVolunteerHistoryByStudentId(int student_id);
    
}
