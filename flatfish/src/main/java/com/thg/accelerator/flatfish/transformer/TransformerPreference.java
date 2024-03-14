package com.thg.accelerator.flatfish.transformer;

import com.thg.accelerator.flatfish.dto.Gender;
import com.thg.accelerator.flatfish.dto.PreferenceDto;
import com.thg.accelerator.flatfish.entities.PreferenceEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.entities.UserLocationsEntity;
import com.thg.accelerator.flatfish.exception.ResourceNotFoundException;
import com.thg.accelerator.flatfish.repositories.UserLocationsRepo;
import com.thg.accelerator.flatfish.repositories.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class TransformerPreference {

    private final UsersRepo userRepo;
    private final UserLocationsRepo userLocationsRepo;
    public TransformerPreference(
            UsersRepo userRepo,
            UserLocationsRepo userLocationsRepo) {
        this.userRepo = userRepo;
        this.userLocationsRepo = userLocationsRepo;
    }

    public PreferenceEntity transformPrefDtoToEntity(PreferenceDto preferenceDto) {
        UserEntity userEntity = userRepo.findById(preferenceDto.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("UserEntity not found"));

        return new PreferenceEntity(
                preferenceDto.getUserId(),
                preferenceDto.getBudgetMin(),
                preferenceDto.getBudgetMax(),
                preferenceDto.getAgeMin(),
                preferenceDto.getAgeMax(),
                preferenceDto.getGender().toString(),
                preferenceDto.isSmoker(),
                userEntity
        );
    }

    public PreferenceDto transformPrefEntityToDto (PreferenceEntity preferenceEntity) {
        List<UserLocationsEntity> userLocations = userLocationsRepo.findByUserEntityUserId(preferenceEntity.getUserId());

        List<Long> preferredAreaIds = userLocations.stream()
                .map(userLocation -> userLocation.getLocationEntity().getLocationId())
                .collect(Collectors.toList());
        return new PreferenceDto(
                preferenceEntity.getUserId(),
                preferenceEntity.getBudgetMin(),
                preferenceEntity.getBudgetMax(),
                preferenceEntity.getAgeMin(),
                preferenceEntity.getAgeMax(),
                Gender.valueOf(preferenceEntity.getGender()),
                preferenceEntity.isSmoker(),
                preferredAreaIds
        );
    }
}
