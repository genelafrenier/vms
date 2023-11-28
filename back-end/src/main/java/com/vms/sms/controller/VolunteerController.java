package com.vms.sms.controller;


import com.vms.sms.repository.VolunteerRepository;

import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vms.sms.model.User;
import com.vms.sms.model.Volunteer;


@Controller
public class VolunteerController {

    @Autowired
    private VolunteerRepository volunteerRepository;

    //endpoint to get past volunteer history for user dashboard
    @GetMapping("/volunteer-history")
    public Iterable<Volunteer> getVolunteerHistory(HttpSession session){
        User user = (User) session.getAttribute("user");

        int user_id = Integer.valueOf(user.getUsername());
        return volunteerRepository.getVolunteerHistoryByStudentId(user_id);
    }

    @GetMapping("/volunteer-history-test")
    public Iterable<Volunteer> getVolunteerHistoryTest(@RequestParam("studentId") int studentId){

        return volunteerRepository.getVolunteerHistoryByStudentId(studentId);
    }

    @PostMapping("/volunteer")
    public @ResponseBody String saveVolunteer(@RequestParam("eventId") int eventId, HttpSession session){
        User user = (User) session.getAttribute("user");

        int user_id = Integer.valueOf(user.getUsername());
        Volunteer volunteer = new Volunteer();
        volunteer.setEventId(eventId);
        volunteer.setStudentId(user_id);
        volunteerRepository.save(volunteer);
        return "Volunteer saved";
    }

    @PostMapping("/volunteer-test")
    public @ResponseBody String saveVolunteerTest(@RequestBody Volunteer volunteer){
        volunteerRepository.save(volunteer);
        return "Volunteer saved";
    }

    



    
}
