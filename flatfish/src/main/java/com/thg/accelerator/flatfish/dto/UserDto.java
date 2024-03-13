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
    private String userId; // email
    private String name;
    private String description;
    private String userGender;
    private String userInsta;
    private boolean smoker;
}
