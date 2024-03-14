package com.thg.accelerator.flatfish.entities;

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
//        @SecondaryTable(name = "Preferences"),
        @SecondaryTable(name = "UserLocations")
})
public class UserEntity {

    @Id
    @Column(name = "user_id", unique = true)
    private String userId;

    @Column(name = "Name")
    private String name;

//    @Column(name = "Email")
//    private String email;

    @Column(name = "Age")
    private int age;

    @Column(name = "Description")
    private String description;

    @Column(name = "UserGender")
    private String userGender;

    @Column(name = "UserInsta")
    private String userInsta;

    @Column(name = "IsASmoker")
    private boolean smoker;

    @OneToMany(mappedBy = "userEntity")
    private List<UserLocationsEntity> locationEntities;

    @OneToOne(mappedBy = "userEntity", cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = true)
    private PreferenceEntity preference;

}
