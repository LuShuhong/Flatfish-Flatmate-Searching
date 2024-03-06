package com.thg.accelerator.flatfish.repositories.entities;

import com.thg.accelerator.flatfish.dto.Gender;
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
    @Id
    private Long preferenceId; // this ID matches userId because 1to1 relationship

    private double budgetMin;
    private double budgetMax;
    private double ageMin;
    private double ageMax;
    private Gender gender;

    @OneToOne
    @MapsId
    @JoinColumn(name = "userId")
    private UserEntity userEntity;
}