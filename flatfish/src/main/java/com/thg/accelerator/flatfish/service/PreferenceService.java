package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.dto.PreferenceDto;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.repositories.PreferencesRepo;
import com.thg.accelerator.flatfish.repositories.UsersRepo;
import com.thg.accelerator.flatfish.transformer.TransformerPreference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PreferenceService {
    @Autowired
    private PreferencesRepo preferencesRepo;

    @Autowired
    private UsersRepo userRepo;

    private TransformerPreference transformerPreference;

    public PreferenceService(
            PreferencesRepo preferencesRepo,
            TransformerPreference transformerPreference) {

    }

    @Transactional
    public void updateUserPreferencesAndLocations(PreferenceDto preferenceDto) {
        UserEntity user = userRepo.findById(preferenceDto.getUserId())
                .
    }

    // GET preference at customizable age range
}
