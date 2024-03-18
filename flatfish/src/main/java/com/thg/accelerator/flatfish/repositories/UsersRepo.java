package com.thg.accelerator.flatfish.repositories;

import com.thg.accelerator.flatfish.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsersRepo extends JpaRepository<UserEntity, String> {

    @Query("SELECT u FROM UserEntity u WHERE u.locationEntityFirstChoiceId = :locationId")
    List<UserEntity> findByFirstChoiceLocationId(@Param("locationId") Long locationId);

    @Query("SELECT u FROM UserEntity u WHERE u.locationEntitySecondChoiceId = :locationId")
    List<UserEntity> findBySecondChoiceLocationId(@Param("locationId") Long locationId);
}
