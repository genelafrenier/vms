package com.vms.sms.controller;

import com.vms.sms.model.Volunteer;
import com.vms.sms.repository.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class VolunteerController {

    @Autowired
    private VolunteerRepository volunteerRepository;

    //endpoint to get past volunteer history for user dashboard
    @GetMapping("/volunteer-history")
    




    
}
