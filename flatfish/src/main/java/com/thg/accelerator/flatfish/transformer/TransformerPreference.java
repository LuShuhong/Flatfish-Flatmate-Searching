package com.thg.accelerator.flatfish.transformer;

import com.thg.accelerator.flatfish.dto.Gender;
import com.thg.accelerator.flatfish.dto.PreferenceDto;
import com.thg.accelerator.flatfish.entities.PreferenceEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.exception.ResourceNotFoundException;
import com.thg.accelerator.flatfish.repositories.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TransformerPreference {
    @Autowired
    private UsersRepo usersRepo;

    public TransformerPreference(){}

    public PreferenceEntity transformPrefDtoToEntity(PreferenceDto preferenceDto) {
        UserEntity userEntity = usersRepo.findById(preferenceDto.getPreferenceId())
                .orElseThrow(() -> new ResourceNotFoundException("UserEntity not found"));

        return new PreferenceEntity(
                preferenceDto.getPreferenceId(),
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
        return new PreferenceDto(
                preferenceEntity.getUserId(),
                preferenceEntity.getBudgetMin(),
                preferenceEntity.getBudgetMax(),
                preferenceEntity.getAgeMin(),
                preferenceEntity.getAgeMax(),
                Gender.valueOf(preferenceEntity.getGender()),
                preferenceEntity.isSmoker()
        );
    }
}
