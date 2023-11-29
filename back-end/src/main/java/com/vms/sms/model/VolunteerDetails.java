package com.vms.sms.model;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@ToString
@AllArgsConstructor
public class VolunteerDetails {
    private @Getter @Setter int volunteerId;
    private @Getter @Setter int studentId;
    private @Getter @Setter int eventId;
    private @Getter @Setter int rating;
    private @Getter @Setter int organizerId;
    private @Getter @Setter String eventName;
    private @Getter @Setter String eventDescription;
    private @Getter @Setter Date eventDate;
    private @Getter @Setter String eventTime;
    private @Getter @Setter String eventLocation;
}
