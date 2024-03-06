package com.thg.accelerator.flatfish.repositories.entities;

import com.thg.accelerator.flatfish.dto.Gender;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Users")
@SecondaryTables({
        @SecondaryTable(name = "Preferences"),
        @SecondaryTable(name = "UserLocations")
})
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserId")
    Long userId;

    @Column(name = "Name")
    private String name;

    @Column(name = "Email")
    private String email;

    @Column(name = "Description")
    private String description;

    @Column(name = "BudgetMin", table = "Preferences")
    private long budgetMin;

    @Column(name = "BudgetMax", table = "Preferences")
    private long budgetMax;

    @Column(name = "AgeMin", table = "Preferences")
    private long ageMin;

    @Column(name = "AgeMax", table = "Preferences")
    private long ageMax;

    @Column(name = "Gender", table = "Preferences")
    private Gender gender;

    @OneToMany(mappedBy = "userEntity")
    private List<UserLocationsEntity> locationEntities;
}
