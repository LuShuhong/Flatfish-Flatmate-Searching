package com.thg.accelerator.flatfish.dto;

import com.thg.accelerator.flatfish.repositories.entities.UserLocationsEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@ToString
public class UserDto {

    private Long userId;
    private String name;
    private String email;
    private String description;
    private long budgetMin;
    private long budgetMax;
    private long ageMin;
    private long ageMax;
    private Gender gender;
    private List<UserLocationsEntity> locationsEntities;

    public UserDto(String name, String email, String description, long budgetMin, long budgetMax, long ageMin, long ageMax, Gender gender, List<UserLocationsEntity> locationsEntities) {

        this.name = name;
        this.email = email;
        this.description = description;
        this.budgetMin = budgetMin;
        this.budgetMax = budgetMax;
        this.ageMin = ageMin;
        this.ageMax = ageMax;
        this.gender = gender;
        this.locationsEntities = locationsEntities;

    }
}
