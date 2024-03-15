package com.thg.accelerator.flatfish.dto;

import lombok.*;

@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@ToString
public class SavedProfileDto {

    private String savedUserId;
    private String name;
    private String age;
    private Gender gender;
    private String description;
    private String email;
    private String userGender;
    private String userInsta;
}
