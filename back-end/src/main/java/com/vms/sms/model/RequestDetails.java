package com.vms.sms.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@ToString
public class RequestDetails {
    private @Getter @Setter int id;
    private @Getter @Setter int eventId;
    private @Getter @Setter int studentId;
    private @Getter @Setter String firstName;
    private @Getter @Setter String lastName;
    private @Getter @Setter String email;
    private @Getter @Setter String phone;

    public RequestDetails(int id, int eventId, int studentId, String firstName, String lastName, String email, String phone) {
        this.id = id;
        this.eventId = eventId;
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }

}
