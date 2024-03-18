package com.thg.accelerator.flatfish.transformer;

import com.thg.accelerator.flatfish.dto.SavedProfileDto;
import com.thg.accelerator.flatfish.entities.SavedProfileEntity;

public class SavedProfileTransformer {

    public static SavedProfileDto transformSavedProfileEntityToDto(SavedProfileEntity savedProfileEntity){
        return new SavedProfileDto(savedProfileEntity.getSavedUserId(), savedProfileEntity.getUserEntity().getUserId());
    }

    public static SavedProfileEntity transformSavedProfileDtoToEntity(SavedProfileDto savedProfileDto){
        SavedProfileEntity savedProfileEntity = new SavedProfileEntity();
        savedProfileEntity.setSavedUserId(savedProfileDto.getSavedProfileId());
        // Set the user entity based on saved profile dto
        // You may need to fetch the user entity from the database based on the userId in the dto
        // Example: savedProfileEntity.setUserEntity(userService.getUserById(savedProfileDto.getUserId()).orElse(null));
        return savedProfileEntity;
    }
}
