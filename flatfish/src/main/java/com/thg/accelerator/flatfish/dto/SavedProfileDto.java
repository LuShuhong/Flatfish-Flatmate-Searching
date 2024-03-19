package com.thg.accelerator.flatfish.dto;

import lombok.*;

@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@ToString
public class SavedProfileDto {
    private Long Id;
    private String SavedProfileId;
    private String userId;


//    private String savedUserId;
//    private String name;
//    private String age;
//    private String gender;
//    private String description;
//    private String email;
//    private String userGender;
//    private String userInsta;
}
