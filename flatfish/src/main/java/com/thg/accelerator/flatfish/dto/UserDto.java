package com.thg.accelerator.flatfish.dto;

import com.thg.accelerator.flatfish.entities.Gender;
import com.thg.accelerator.flatfish.entities.UserLocationsEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@ToString
public class UserDto {

    private String userId;
    private String name;
    private String birthday;
    private long age;
    private String description;
    private String userGender;
    private String instagram;
    private long budgetMin;
    private long budgetMax;
    private long ageMin;
    private long ageMax;
    private Gender gender;
    private List<UserLocationsEntity> locationsEntities;
//    private List<String> locationPreferences;
}
