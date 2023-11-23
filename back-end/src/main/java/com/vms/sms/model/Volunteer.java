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
    private @Getter @Setter String studentId;
    private @Getter @Setter String eventId;
    @Column(nullable = true)
    private @Getter @Setter String rating;
}
