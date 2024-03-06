package com.thg.accelerator.flatfish.repositories.repos;

import com.thg.accelerator.flatfish.repositories.entity.PreferenceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreferencesRepo extends JpaRepository<PreferenceEntity, Long> {
}
