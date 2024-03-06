package com.thg.accelerator.flatfish.repositories.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "preferences")
@AllArgsConstructor
@NoArgsConstructor
public class PreferenceEntity {
    @Id
    private Long preferenceId; // this ID matches userId because 1to1 relationship

    private double budgetMin;
    private double budgetMax;
    private double ageMin;
    private double ageMax;
    private String gender;

    @OneToOne
    @MapsId
    @JoinColumn(name = "userId")
    private UserEntity userEntity;
}
