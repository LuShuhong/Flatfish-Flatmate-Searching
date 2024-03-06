package com.thg.accelerator.flatfish.repositories.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "users")
@ToString
@AllArgsConstructor // for transformer
@NoArgsConstructor // for JPA entity
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
    private String name;
    private String email;
    // to add PasswordHash

    @OneToOne(mappedBy = "userEntity", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private PreferenceEntity preferenceEntity;

    @OneToMany(mappedBy = "userEntity")
    private List<UserLocationsEntity> userLocations;
}
