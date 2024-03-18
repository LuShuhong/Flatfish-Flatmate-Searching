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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="saving_user_id", nullable = false)
    private UserEntity savingUser;

    @ManyToOne
    @JoinColumn(name = "saved_user_id", nullable = false)
    private UserEntity savedUser;

}
// many to one relationship with user entity

// a key(userid of the person doing the saving), a list of userid saved profiles