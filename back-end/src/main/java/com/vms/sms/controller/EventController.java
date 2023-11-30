package com.vms.sms.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.vms.sms.model.Event;
import com.vms.sms.repository.EventRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    //endpoint for get all events functionality (events page)
    @GetMapping("/events")
    public @ResponseBody Iterable<Event> getAllEvents(){
        return eventRepository.findAll();
    }

    //endpoint for get event by id functionality (event details page)
    @GetMapping("/event")
    public @ResponseBody Event getEvent(@RequestParam("id") int id){
        return eventRepository.findById(id).get();
    }

    //endpoint for create event functionality
    @PostMapping("/event")
    public @ResponseBody String saveEvent(@RequestBody Event event){
        eventRepository.save(event);
        return "Event saved";
    }

    //endpoint for delete event functionality
    @DeleteMapping("/event")
    public @ResponseBody String deleteEvent(@RequestParam("id") int id){
        eventRepository.deleteById(id);
        return "Event deleted";
    }

    //endpoint for edit event functionality
    @PutMapping("/event")
    public @ResponseBody String updateEvent(@RequestBody Event event, @RequestParam("id") int id){
        Optional<Event> eventOptional = eventRepository.findById(id);
        if (eventOptional.isPresent()) {
            System.out.println("Event found");
            Event eventUpdate = eventOptional.get();
            eventUpdate.setEventName(event.getEventName());
            eventUpdate.setEventDescription(event.getEventDescription());
            eventUpdate.setEventDate(event.getEventDate());
            eventUpdate.setEventTime(event.getEventTime());
            eventUpdate.setEventLocation(event.getEventLocation());
            eventRepository.save(eventUpdate);
            return "Event Updated";
        } else {
            System.out.println("Event not found");
            return "Event not found";
        }
    }

    //endpoint for events by organizer
    @GetMapping("/events-by-organizer")
    public @ResponseBody Iterable<Event> getEventsByOrganizerId(@RequestParam("organizer_id") int organizer_id){
  
        return eventRepository.getEventsByOrganizerId(organizer_id);
    }


    
}
