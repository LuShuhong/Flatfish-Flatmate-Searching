package com.thg.accelerator.flatfish.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "preferences")
@AllArgsConstructor
@NoArgsConstructor
public class PreferenceEntity {
//    @Id
//    private String preferenceId; // this ID matches userId because 1to1 relationship

    @Id
    @Column(name="user_id", insertable=false, updatable=false)
    private String userId;
    private double budgetMin;
    private double budgetMax;
    private double ageMin;
    private double ageMax;
    private String gender;
    private boolean smoker;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private UserEntity userEntity;
}