package com.thg.accelerator.flatfish.repositories;

import com.thg.accelerator.flatfish.entities.LocationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepo extends JpaRepository<LocationEntity, Long> {
//    LocationEntity findByLocationName(String locationName);
}
