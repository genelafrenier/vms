package com.vms.sms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "events")
@Entity
public class Event {
    
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private @Getter @Setter int id;
    private @Getter @Setter int organizerId;
    private @Getter @Setter String eventName;
    private @Getter @Setter String eventDescription;
    @Temporal(TemporalType.DATE)
    private @Getter @Setter Date eventDate;
    private @Getter @Setter String eventTime;
    private @Getter @Setter String eventLocation;
  
}
