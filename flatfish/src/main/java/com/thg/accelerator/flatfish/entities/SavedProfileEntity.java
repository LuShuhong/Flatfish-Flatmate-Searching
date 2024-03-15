package com.thg.accelerator.flatfish.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "saved_profiles")
@AllArgsConstructor
@NoArgsConstructor
public class SavedProfileEntity {
    @Id
    @Column(name="saved_user_id", insertable = false, updatable = false)
    private String savedUserId;

    // a key(userid of the person doing the saving), a list of userid saved profiles
//    private String savedUserId;
//    private String name;
//    private String age;
//    private Gender gender;
////    private String jobTitle;
//    private String description;
//    private String email;
//    private String userGender;
//    private String userInsta;

    @ManyToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private UserEntity userEntity;

}
// many to one relationship with user entity
