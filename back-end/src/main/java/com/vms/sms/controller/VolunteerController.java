package com.vms.sms.controller;


import com.vms.sms.repository.VolunteerRepository;

import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vms.sms.model.User;
import com.vms.sms.model.Volunteer;
import com.vms.sms.model.VolunteerDetails;


@Controller
public class VolunteerController {

    @Autowired
    private VolunteerRepository volunteerRepository;

    //endpoint to get past volunteer history for user dashboard
    @GetMapping("/volunteer-history")
    public @ResponseBody Iterable<VolunteerDetails> getVolunteerHistoryTest(@RequestParam("studentId") int studentId){
        return volunteerRepository.getVolunteerHistoryByStudentId(studentId);
    }

    //endpoint to get current volunteer events for user dashboard
    @GetMapping("/volunteer-current")
    public @ResponseBody Iterable<VolunteerDetails> getCurrentVolunteerTest(@RequestParam("studentId") int studentId){
        return volunteerRepository.getCurrentVolunteerByStudentId(studentId);
    }

    @PostMapping("/volunteer")
    public @ResponseBody String saveVolunteer(@RequestBody Volunteer volunteer){
        volunteerRepository.save(volunteer);
        return "Volunteer saved";
    }

    @PostMapping("/volunteer-test")
    public @ResponseBody String saveVolunteerTest(@RequestBody Volunteer volunteer){
        volunteerRepository.save(volunteer);
        return "Volunteer saved";
    }

    // @GetMapping("/approved-events")
    // public ResponseEntity<Integer> getEventsbyStudentId(@RequestParam("student_id") int studentId){
    //     if (!volunteerRepository.existsById(studentId)) {
            
    //         return ResponseEntity.ok(studentId);
    //     } else {
    //         return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(-111);
    //     }
    // }
    



    
}
