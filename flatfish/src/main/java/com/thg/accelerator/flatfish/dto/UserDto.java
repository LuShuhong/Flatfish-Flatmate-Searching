package com.thg.accelerator.flatfish.dto;

import com.thg.accelerator.flatfish.entities.Gender;
import com.thg.accelerator.flatfish.entities.UserLocationsEntity;
import lombok.*;
import java.util.List;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@ToString
public class UserDto {
    @Email()
    private String email;
    private String name;
    private String description;
    private String userGender;
    private String userInsta;
}
