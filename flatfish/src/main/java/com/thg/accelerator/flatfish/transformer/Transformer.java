package com.thg.accelerator.flatfish.transformer;


import com.thg.accelerator.flatfish.dto.UserDto;
//import com.thg.accelerator.flatfish.entities.LocationEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
//import com.thg.accelerator.flatfish.repositories.LocationRepo;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

//import java.util.ArrayList;
//import java.util.List;
//
//@Component
public class Transformer {

//    private static LocationRepo locationRepo;
//
//    @Autowired
//    public void setLocationRepo(LocationRepo repo) {
//        Transformer.locationRepo = repo;
//    }
//
//    public Transformer(){}
    public static UserDto transformUserEntityToDto(UserEntity userEntity) {
//        LocationEntity firstChoice = locationRepo.findById(userEntity.getLocationEntityFirstChoiceId()).orElse(null);
//        LocationEntity secondChoice = locationRepo.findById(userEntity.getLocationEntitySecondChoiceId()).orElse(null);
//        LocationEntity thirdChoice = locationRepo.findById(userEntity.getLocationEntityThirdChoiceId()).orElse(null);
//
//        List<String> locationPreferences = new ArrayList<>();
//        if (firstChoice != null) locationPreferences.add(firstChoice.getLocationName());
//        if (secondChoice != null) locationPreferences.add(secondChoice.getLocationName());
//        if (thirdChoice != null) locationPreferences.add(thirdChoice.getLocationName());

        return new UserDto(userEntity.getUserId(), userEntity.getName(), userEntity.getBirthday(), userEntity.getAge(),
                userEntity.getDescription(), userEntity.getUserGender(), userEntity.getInstagram(),
                userEntity.getBudgetMin(), userEntity.getBudgetMax(), userEntity.getAgeMin(),
                userEntity.getAgeMax(), userEntity.getGender(), userEntity.getLocationEntities());
    }

    public static UserEntity transformUserDtoToEntity(UserDto userDto) {
        return new UserEntity(userDto.getUserId(), userDto.getName(), userDto.getBirthday(), userDto.getAge(),
                userDto.getDescription(), userDto.getUserGender(), userDto.getInstagram(),
                userDto.getBudgetMin(), userDto.getBudgetMax(), userDto.getAgeMin(),
                userDto.getAgeMax(), userDto.getGender(), userDto.getLocationsEntities());
//        UserEntity userEntity = new UserEntity();
//        userEntity.setUserId(userDto.getUserId());
//        userEntity.setName(userDto.getName());
//        userEntity.setBirthday(userDto.getBirthday());
//        userEntity.setAge(userDto.getAge());
//        userEntity.setDescription(userDto.getDescription());
//        userEntity.setUserGender(userDto.getUserGender());
//        userEntity.setInstagram(userDto.getInstagram());
//        userEntity.setBudgetMin(userDto.getBudgetMin());
//        userEntity.setBudgetMax(userDto.getBudgetMax());
//        userEntity.setAgeMin(userDto.getAgeMin());
//        userEntity.setAgeMax(userDto.getAgeMax());
//        userEntity.setGender(userDto.getGender());
//
//        List<String> locationPreferences = userDto.getLocationPreferences();
//        if (locationPreferences != null) {
//            if (!locationPreferences.isEmpty()) {
//                userEntity.setLocationEntityFirstChoiceId(getLocationIdByName(locationPreferences.get(0)));
//            }
//            if (locationPreferences.size() > 1) {
//                userEntity.setLocationEntitySecondChoiceId(getLocationIdByName(locationPreferences.get(1)));
//            }
//            if (locationPreferences.size() > 2) {
//                userEntity.setLocationEntityThirdChoiceId(getLocationIdByName(locationPreferences.get(2)));
//            }
//        }
//        return userEntity;
    }

//    private static Long getLocationIdByName(String locationName) {
//        LocationEntity location = locationRepo.findByLocationName(locationName);
//        return location != null ? location.getLocationId() : null;
    }


    // TODO: Check if there needs to be an additional method for an incoming UserDto with no id (generated by UserEntity)
