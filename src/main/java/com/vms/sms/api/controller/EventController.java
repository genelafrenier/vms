package com.vms.sms.api.controller;

import com.vms.sms.api.model.Event;
import com.vms.sms.api.repository.EventRepository;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @GetMapping("/events")
    public @ResponseBody Iterable<Event> getAllEvents(){
        return eventRepository.findAll();
    }

    @GetMapping("/event/{id}")
    public @ResponseBody Event getEvent(@RequestParam("id") int id){
        return eventRepository.findById(id).get();
    }

    @PostMapping("/event")
    public @ResponseBody String saveEvent(@RequestBody Event event){
        eventRepository.save(event);
        return "Event saved";
    }

    @DeleteMapping("/event/{id}")
    public @ResponseBody String deleteEvent(@RequestParam("id") int id){
        eventRepository.deleteById(id);
        return "Event deleted";
    }

    @PutMapping("/event/{id}")
    public @ResponseBody String updateEvent(@RequestBody Event event, @RequestParam("id") int id){
        eventRepository.save(event);
        return "Event updated";
    }

    
}
