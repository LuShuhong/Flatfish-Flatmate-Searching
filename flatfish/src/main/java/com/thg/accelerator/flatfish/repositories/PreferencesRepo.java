package com.thg.accelerator.flatfish.repositories;

import com.thg.accelerator.flatfish.entities.PreferenceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreferencesRepo extends JpaRepository<PreferenceEntity, String> {
}
