package com.vms.sms.controller;

import com.vms.sms.model.Requests;
import com.vms.sms.repository.RequestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;

public class RequestController {

    @Autowired
    private RequestRepository requestRepository;

    //endpoint to get requests by event, for organizer dashboard request approval popup
    @GetMapping("/requests-by-event")
    public Iterable<Requests> getRequestsByEventId(int event_id){
        return requestRepository.getRequestsByEventId(event_id);
    }

    @PostMapping("/request")
    public @ResponseBody String saveRequest(@RequestBody Requests request){
        requestRepository.save(request);
        return "Request saved";
    }



    
}
