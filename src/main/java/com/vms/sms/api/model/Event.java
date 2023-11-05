package com.vms.sms.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Event {
    
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private int id;
    private int organizerId;
    private String eventName;
    private String eventDescription;
    private String eventDate;
    private String eventTime;
    private String eventLocation;

    public Event(int id, int organizerId, String eventName, String eventDescription, String eventDate, String eventTime, String eventLocation) {
        this.organizerId = organizerId;
        this.eventName = eventName;
        this.eventDescription = eventDescription;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.eventLocation = eventLocation;
    }

    public void setOrganizerId(int organizerId) {
        this.organizerId = organizerId;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    public void setEventDate(String eventDate) {
        this.eventDate = eventDate;
    }

    public void setEventTime(String eventTime) {
        this.eventTime = eventTime;
    }

    public void setEventLocation(String eventLocation) {
        this.eventLocation = eventLocation;
    }

    public int getId() {
        return id;
    }

    public int getOrganizerId() {
        return organizerId;
    }

    public String getEventName() {
        return eventName;
    }

    public String getEventDescription() {
        return eventDescription;
    }

    public String getEventDate() {
        return eventDate;
    }

    public String getEventTime() {
        return eventTime;
    }

    public String getEventLocation() {
        return eventLocation;
    }

       
}
