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


    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private UserEntity userEntity;

}
// many to one relationship with user entity

// a key(userid of the person doing the saving), a list of userid saved profiles