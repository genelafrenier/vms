package com.vms.sms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "requests")
@Entity
public class Requests {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private @Getter @Setter int id;
    private @Getter @Setter int studentId;
    private @Getter @Setter int eventId;
    private @Getter @Setter String approvalStatus;
    
}
