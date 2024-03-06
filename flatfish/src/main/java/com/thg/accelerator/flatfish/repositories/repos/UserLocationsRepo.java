package com.thg.accelerator.flatfish.repositories.repos;

import com.thg.accelerator.flatfish.repositories.entity.UserLocationsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLocationsRepo extends JpaRepository<UserLocationsEntity, Long> {
}
