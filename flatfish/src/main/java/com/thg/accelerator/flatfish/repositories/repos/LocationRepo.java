package com.thg.accelerator.flatfish.repositories.repos;

import com.thg.accelerator.flatfish.repositories.entities.LocationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepo extends JpaRepository<LocationEntity, Long> {
}
