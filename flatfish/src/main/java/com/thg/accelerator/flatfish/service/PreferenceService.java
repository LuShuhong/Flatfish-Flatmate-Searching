package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.dto.PreferenceDto;
import com.thg.accelerator.flatfish.entities.LocationEntity;
import com.thg.accelerator.flatfish.entities.PreferenceEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.entities.UserLocationsEntity;
import com.thg.accelerator.flatfish.exception.ResourceNotFoundException;
import com.thg.accelerator.flatfish.repositories.LocationRepo;
import com.thg.accelerator.flatfish.repositories.PreferencesRepo;
import com.thg.accelerator.flatfish.repositories.UserLocationsRepo;
import com.thg.accelerator.flatfish.repositories.UsersRepo;
import com.thg.accelerator.flatfish.transformer.TransformerPreference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class PreferenceService {
    private final PreferencesRepo preferencesRepo;

    private final UsersRepo userRepo;

    private final LocationRepo locationRepo;

    private final UserLocationsRepo userLocationRepo;

    private final TransformerPreference transformerPreference;

    public PreferenceService(
            PreferencesRepo preferencesRepo,
            UsersRepo userRepo,
            LocationRepo locationRepo,
            UserLocationsRepo userLocationRepo,
            TransformerPreference transformerPreference) {
        this.preferencesRepo = preferencesRepo;
        this.userRepo = userRepo;
        this.locationRepo = locationRepo;
        this.userLocationRepo = userLocationRepo;
        this.transformerPreference = transformerPreference;
    }

    @Transactional
    public PreferenceDto updatePreferenceAndLocations(String userId, PreferenceDto updatedPreferenceDto) {
        // Fetch the existing PreferenceEntity
        PreferenceEntity preferenceEntity = preferencesRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Preference for user ID " + userId + " not found"));

        // Update basic preference details
        preferenceEntity.setBudgetMin(updatedPreferenceDto.getBudgetMin());
        preferenceEntity.setBudgetMax(updatedPreferenceDto.getBudgetMax());
        preferenceEntity.setAgeMin(updatedPreferenceDto.getAgeMin());
        preferenceEntity.setAgeMax(updatedPreferenceDto.getAgeMax());
        preferenceEntity.setGender(updatedPreferenceDto.getGender().toString());
        preferenceEntity.setSmoker(updatedPreferenceDto.isSmoker());

        // Process preferred locations
        // First, remove existing UserLocations associated with this user
        userLocationRepo.deleteByUserEntityUserId(userId);

        // Then, add new UserLocations based on updatedPreferenceDto
        updatedPreferenceDto.getPreferredAreaIds().forEach(areaId -> {
            LocationEntity location = locationRepo.findById(areaId)
                    .orElseThrow(() -> new RuntimeException("Location not found"));
            UserLocationsEntity userLocation = new UserLocationsEntity();
            userLocation.setUserEntity(preferenceEntity.getUserEntity());
            userLocation.setLocationEntity(location);
            userLocationRepo.save(userLocation);
        });

        // Save the updated preferences
        preferencesRepo.save(preferenceEntity);

        // Return the updated PreferenceDto
        return transformerPreference.transformPrefEntityToDto(preferenceEntity);
    }

    public void createPreference(PreferenceDto preferenceDto) {
        if (!preferenceDto.getUserId().isEmpty()) {
            preferencesRepo.save((transformerPreference.transformPrefDtoToEntity(preferenceDto)));
        }
    }

    // TODO: GET preference at customizable age range
}
