package com.thg.accelerator.flatfish.transformer;


import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.entities.UserEntity;

public class Transformer {
    public static UserDto transformUserEntityToDto(UserEntity userEntity) {
        return new UserDto(userEntity.getUserId(), userEntity.getName(), userEntity.getBirthday(), userEntity.getAge(),
                userEntity.getDescription(), userEntity.getUserGender(), userEntity.getInstagram(),
                userEntity.getBudgetMin(), userEntity.getBudgetMax(), userEntity.getAgeMin(),
                userEntity.getAgeMax(), userEntity.getGender(), userEntity.getLocationEntities(), userEntity.getSavedProfilesEntitiesList());
    }

    public static UserEntity transformUserDtoToEntity(UserDto userDto) {
        return new UserEntity(userDto.getUserId(), userDto.getName(), userDto.getBirthday(), userDto.getAge(),
                userDto.getDescription(), userDto.getUserGender(), userDto.getInstagram(),
                userDto.getBudgetMin(), userDto.getBudgetMax(), userDto.getAgeMin(),
                userDto.getAgeMax(), userDto.getGender(), userDto.getLocationsEntities(), userDto.getSavedProfileEntities());
    }



}

    // TODO: Check if there needs to be an additional method for an incoming UserDto with no id (generated by UserEntity)
