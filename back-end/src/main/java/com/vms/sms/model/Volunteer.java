package com.vms.sms.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
 
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "volunteer")
@Entity
public class Volunteer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private @Getter @Setter int id;
    private @Getter @Setter int studentId;
    private @Getter @Setter int eventId;
    @Column(nullable = true)
    private @Getter @Setter int rating;
}
