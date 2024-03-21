package com.thg.accelerator.flatfish.dto;

import com.thg.accelerator.flatfish.entities.Gender;
import com.thg.accelerator.flatfish.entities.SavedProfileEntity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor // for service
@ToString
public class SavedProfileDetailDto {
//    private String userId;
    private String name;
//    private String birthday;
    private String userId;
    private long age;
    private String description;
    private String userGender;
    private String instagram;
    private long budgetMin;
    private long budgetMax;
    private long ageMin;
    private long ageMax;
    private Gender preferredGender;

//    private List<SavedProfileEntity> savedProfileEntities;

    //    private List<UserLocationsEntity> locationsEntities;
    private String location1;
    private String location2;
    private String location3;
}
