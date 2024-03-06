package com.thg.accelerator.flatfish.repositories.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "task_items")
@ToString
@AllArgsConstructor // for transformer
@NoArgsConstructor // for JPA entity
public class UserLocationsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userLocationId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private UserEntity userEntity;

    @ManyToOne
    @JoinColumn(name = "locationId")
    private LocationEntity locationEntity;
}
