package com.vms.sms.controller;

import com.vms.sms.model.Requests;
import com.vms.sms.model.User;
import com.vms.sms.repository.RequestRepository;

import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import com.vms.sms.model.RequestDetails;

@RestController
public class RequestController {

    @Autowired
    private RequestRepository requestRepository;

    //endpoint to get requests by event, for organizer dashboard request approval popup
    @GetMapping("/requests-by-event")
    public Iterable<RequestDetails> getRequestsByEventId(@RequestParam("eventId") int event_id){
        return requestRepository.getRequestsByEventId(event_id);
    }

    @PostMapping("/request")
    public @ResponseBody String saveRequest(@RequestBody Requests request){
        requestRepository.save(request);
        return "Request saved";
    }



    
}
