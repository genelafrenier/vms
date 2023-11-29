package com.vms.sms.controller;

import com.vms.sms.model.Requests;
import com.vms.sms.repository.RequestRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    public @ResponseBody Iterable<RequestDetails> getRequestsByEventId(@RequestParam("eventId") String event_id){
            int eventId = Integer.parseInt(event_id);
            System.out.println(eventId);
            return requestRepository.getRequestsByEventId(eventId);

    }

    @PostMapping("/request")
    public @ResponseBody String saveRequest(@RequestBody Requests request){
        requestRepository.save(request);
        return "Request saved";
    }

    @PostMapping("/apply")
    public ResponseEntity<String> application(@RequestBody Requests request){
        if (!requestRepository.existsByStudentIdAndEventId(request.getStudentId(), request.getEventId())) {
            requestRepository.save(request);
            return ResponseEntity.ok("Request saved");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Already applied");
        }
    }

    

    @PutMapping("/request")
    public @ResponseBody String approveDenyRequest(@RequestParam ("id") int id, @RequestParam ("approvalStatus") String status){
        Requests request = requestRepository.findById(id).get();
        request.setApprovalStatus(status);
        requestRepository.save(request);
        return "Request saved";
    }
}
