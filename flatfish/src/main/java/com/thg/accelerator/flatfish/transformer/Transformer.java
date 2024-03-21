package com.thg.accelerator.flatfish.transformer;


import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.entities.UserEntity;

public class Transformer {
    public static UserDto transformUserEntityToDto(UserEntity userEntity) {

        return new UserDto(userEntity.getUserId(), userEntity.getName(), userEntity.getPassword(),
                userEntity.getBirthday(), userEntity.getAge(), userEntity.getDescription(),
                userEntity.getUserGender(), userEntity.getInstagram(), userEntity.getPicture(),
                userEntity.getBudgetMin(), userEntity.getBudgetMax(), userEntity.getAgeMin(),
                userEntity.getAgeMax(), userEntity.getGender(), userEntity.getLocation1(), userEntity.getLocation2(),
                userEntity.getLocation3(), userEntity.getRole());

    }

//    public static UserEntity transformUserDtoToEntity(UserDto userDto) {
//        return new UserEntity(userDto.getUserId(), userDto.getName(), userDto.getBirthday(), userDto.getAge(),
//                userDto.getDescription(), userDto.getUserGender(), userDto.getInstagram(),
//                userDto.getBudgetMin(), userDto.getBudgetMax(), userDto.getAgeMin(),
//                userDto.getAgeMax(), userDto.getGender(),userDto.getSavedProfileEntities(), userDto.getLocation1(), userDto.getLocation2(),
//                userDto.getLocation3());
//    }

    public static UserEntity transformUserDtoToEntity(UserDto userDto) {
//        return new UserEntity(userDto.getUserId(), userDto.getName(), userDto.getPassword(),
//                userDto.getBirthday(), userDto.getAge(), userDto.getDescription(),
//                userDto.getUserGender(), userDto.getInstagram(), userDto.getPicture(),
//                userDto.getBudgetMin(), userDto.getBudgetMax(), userDto.getAgeMin(),
//                userDto.getAgeMax(), userDto.getGender(), userDto.getSavedProfileEntities(),
//                userDto.getLocation1(), userDto.getLocation2(), userDto.getLocation3(),
//                userDto.getRole());
        UserEntity userEntity = new UserEntity();
        userEntity.setUserId(userDto.getUserId());
        userEntity.setName(userDto.getName());
        userEntity.setPassword(userDto.getPassword());
        userEntity.setBirthday(userDto.getBirthday());
        userEntity.setAge(userDto.getAge());
        userEntity.setDescription(userDto.getDescription());
        userEntity.setUserGender(userDto.getUserGender());
        userEntity.setInstagram(userDto.getInstagram());
        userEntity.setPicture(userDto.getPicture());
        userEntity.setBudgetMin(userDto.getBudgetMin());
        userEntity.setBudgetMax(userDto.getBudgetMax());
        userEntity.setAgeMin(userDto.getAgeMin());
        userEntity.setAgeMax(userDto.getAgeMax());
        userEntity.setGender(userDto.getGender());
        // userEntity.setSavedProfilesEntitiesList(convertSavedProfiles(userDto.getSavedProfileEntities()));
        userEntity.setLocation1(userDto.getLocation1());
        userEntity.setLocation2(userDto.getLocation2());
        userEntity.setLocation3(userDto.getLocation3());
        userEntity.setRole(userDto.getRole());
        return userEntity;
    }
}


    // TODO: Check if there needs to be an additional method for an incoming UserDto with no id (generated by UserEntity)
