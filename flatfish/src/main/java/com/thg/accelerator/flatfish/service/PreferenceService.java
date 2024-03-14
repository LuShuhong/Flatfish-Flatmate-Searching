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

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

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

    public List<PreferenceEntity> getAllPreferences() {
        return preferencesRepo.findAll();
    }

    @Transactional
    public PreferenceDto updatePreferenceAndLocations(String userId, PreferenceDto updatedPreferenceDto) {
        // Fetch the existing PreferenceEntity and associated UserLocationsEntity
        PreferenceEntity preferenceEntity = preferencesRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("Preference not found"));

        List<UserLocationsEntity> currentLocations = userLocationRepo.findByUserEntityUserId(userId);
        Set<Long> currentLocationIds = currentLocations.stream()
                .map(location -> location.getLocationEntity().getLocationId())
                .collect(Collectors.toSet());

        Set<Long> updatedLocationIds = new HashSet<>(updatedPreferenceDto.getPreferredAreaIds());

        // Remove locations no longer preferred
        currentLocations.stream()
                .filter(location -> !updatedLocationIds.contains(location.getLocationEntity().getLocationId()))
                .forEach(userLocationRepo::delete);

        // Add new locations
        updatedLocationIds.removeAll(currentLocationIds); // This leaves only new IDs in updatedLocationIds
        for (Long newLocationId : updatedLocationIds) {
            LocationEntity newLocation = locationRepo.findById(newLocationId)
                    .orElseThrow(() -> new RuntimeException("Location not found"));
            UserLocationsEntity newUserLocation = new UserLocationsEntity();
            newUserLocation.setUserEntity(preferenceEntity.getUserEntity());
            newUserLocation.setLocationEntity(newLocation);
            userLocationRepo.save(newUserLocation);
        }

        // Update the PreferenceEntity as necessary
        // (Similar to your existing logic for setting other fields)
        preferencesRepo.save(preferenceEntity);
        return transformerPreference.transformPrefEntityToDto(preferenceEntity);
    }

    @Transactional
    public void createPreference(PreferenceDto preferenceDto) {
        // Ensure the user exists
        UserEntity userEntity = userRepo.findById(preferenceDto.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Assuming transformPrefDtoToEntity properly sets the UserEntity
        PreferenceEntity newPreferenceEntity = transformerPreference.transformPrefDtoToEntity(preferenceDto);
        newPreferenceEntity.setUserEntity(userEntity); // Ensure the user entity is set in the preference

        preferencesRepo.save(newPreferenceEntity);

        // Process preferred locations
        preferenceDto.getPreferredAreaIds().forEach(areaId -> {
            LocationEntity location = locationRepo.findById(areaId)
                    .orElseThrow(() -> new RuntimeException("Location not found"));
            UserLocationsEntity userLocation = new UserLocationsEntity();
            userLocation.setUserEntity(userEntity); // Use the fetched/validated user entity
            userLocation.setLocationEntity(location);
            userLocationRepo.save(userLocation);
        });
    }

    // TODO: GET preference at customizable age range
}
