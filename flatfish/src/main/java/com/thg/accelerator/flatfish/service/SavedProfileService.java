package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.entities.SavedProfileEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.repositories.SavedProfileRepo;
import com.thg.accelerator.flatfish.repositories.UsersRepo;
import com.thg.accelerator.flatfish.transformer.Transformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.thg.accelerator.flatfish.dto.SavedProfileDetailDto;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SavedProfileService {
    private final SavedProfileRepo savedRepo;
    private final UsersRepo usersRepo;

    @Autowired
    public SavedProfileService(SavedProfileRepo savedRepo, UsersRepo usersRepo) {
        this.savedRepo = savedRepo;
        this.usersRepo= usersRepo;
    }




    //vanilla
    public Optional<List<SavedProfileEntity>> getAllSavedProfiles() {
        return Optional.of(savedRepo.findAll());
    }


//    public List<UserDto> getSavedProfile(String id){
//        List<SavedProfileEntity> savedProfiles = savedRepo.findBySavingUserUserId(id);
//        List<UserEntity> users = savedProfiles.stream()
//                .map(SavedProfileEntity::getSavedUser)
//                .map(UserEntity::getUserId)
//                .map(usersRepo::findById)
//                .filter(Optional::isPresent)
//                .map(Optional::get)
//                .collect(Collectors.toList());
//
//        return users.stream()
//                .map(Transformer::transformUserEntityToDto)
//                .collect(Collectors.toList());
//    }

    // public List<UserEntity> getSavedProfileById(String id){
    //     List<SavedProfileEntity> savedProfiles = savedRepo.findBySavingUserUserId(id);
    //     List<UserEntity> profileList = savedProfiles.stream()
    //             .map(SavedProfileEntity::getSavedUser) // Assuming you have a method to get the saved profile from SavedProfileEntity
    //             .map(UserEntity::getUserId)
    //             .map(usersRepo::findById) // Assuming you have a method to find a profile by ID
    //             .filter(Optional::isPresent)
    //             .map(Optional::get)
    //             .collect(Collectors.toList());
    //     return profileList.stream().collect(Collectors.toList());
    // }
//
//    public List<SavedProfileEntity> getAllSavedProfilesBySavingUser(String savingUserId) {
//        return savedRepo.findBySavingUserUserId(savingUserId);
//    }

    public List<SavedProfileDetailDto> getAllSavedProfilesDetailsBySavingUser(String savingUserId) {
        List<SavedProfileEntity> savedProfiles = savedRepo.findBySavingUserUserId(savingUserId);
        return savedProfiles.stream()
                .map(this::toSavedProfileDetailDto)
                .collect(Collectors.toList());
    }

    private SavedProfileDetailDto toSavedProfileDetailDto(SavedProfileEntity savedProfile) {
        UserEntity targetSavedUserEntity = savedProfile.getSavedUser(); // Assuming getSavedUser returns the user that was saved
        SavedProfileDetailDto targetSavedUserDto = new SavedProfileDetailDto();
        targetSavedUserDto.setName(targetSavedUserEntity.getName());
        targetSavedUserDto.setUserId(targetSavedUserEntity.getUserId());
        targetSavedUserDto.setAge(targetSavedUserEntity.getAge());
        targetSavedUserDto.setDescription(targetSavedUserEntity.getDescription());
        targetSavedUserDto.setUserGender(targetSavedUserEntity.getUserGender());
        targetSavedUserDto.setInstagram(targetSavedUserEntity.getInstagram());
        targetSavedUserDto.setBudgetMin(targetSavedUserEntity.getBudgetMin());
        targetSavedUserDto.setBudgetMax(targetSavedUserEntity.getBudgetMax());
        targetSavedUserDto.setAgeMin(targetSavedUserEntity.getAgeMin());
        targetSavedUserDto.setAgeMax(targetSavedUserEntity.getAgeMax());
        targetSavedUserDto.setPreferredGender(targetSavedUserEntity.getGender());
        targetSavedUserDto.setLocation1(targetSavedUserEntity.getLocation1());
        targetSavedUserDto.setLocation2(targetSavedUserEntity.getLocation2());
        targetSavedUserDto.setLocation3(targetSavedUserEntity.getLocation3());
        targetSavedUserDto.setPicture(targetSavedUserEntity.getPicture());


        return targetSavedUserDto;
    }

//    public void saveAProfile(String savingUserId, SavedProfileEntity  savedProfileEntity, String savedUserId) {
//        // Find the user by ID
//        Optional<UserEntity> savingUserEntityOptional = usersRepo.findById(savingUserId);
//        Optional<UserEntity> savedUserEntityOptional = usersRepo.findById(savedUserId);
//
//        if (savingUserEntityOptional.isPresent() && savedUserEntityOptional.isPresent()) {
//            UserEntity savedUserEntity = savedUserEntityOptional.get();
//            savedProfileEntity.setSavedUser(savedUserEntity);; // Set the user for the saved profile
//            savedRepo.save(savedProfileEntity);
//        } else {
//            // Handle case where user is not found
//            throw new IllegalArgumentException("User with ID " + savingUserId + " not found");
//        }
//    }

    public void saveAProfile(@PathVariable String savingUserId, SavedProfileEntity savedProfileEntity, String savedUserId) {
        // Find the user by ID
        Optional<UserEntity> savingUserEntityOptional = usersRepo.findById(savingUserId);
        Optional<UserEntity> savedUserEntityOptional = usersRepo.findById(savedUserId);

        if(savingUserEntityOptional.isPresent() && savedUserEntityOptional.isPresent()){

            UserEntity savingUserEntity = savingUserEntityOptional.get();
            UserEntity savedUserEntity = savedUserEntityOptional.get();

            savedProfileEntity.setSavingUser(savingUserEntity);
            savedProfileEntity.setSavedUser(savedUserEntity);
            savedRepo.save(savedProfileEntity);
        } else {
            // Handle case where user is not found
            throw new IllegalArgumentException("User with ID " + savedUserId + " not found");
        }
    }

//    public void saveAProfile(SavedProfileEntity savedProfileEntity) {
//        savedRepo.save(savedProfileEntity);
//    }
//
////    public Optional<SavedProfileEntity> getProfileById(Long savedProfileId) {
////        return savedRepo.findById(savedProfileId);
////    }

    public void deleteASavedProfileByUserIds(String savingUserId, String savedUserId) {
        Optional<SavedProfileEntity> savedProfileEntityOptional = savedRepo.findBySavingUserUserIdAndSavedUserUserId(savingUserId, savedUserId);

        if (savedProfileEntityOptional.isPresent()) {
            savedRepo.delete(savedProfileEntityOptional.get());
        } else {
            throw new RuntimeException("Saved Profile not found for saving user ID " + savingUserId + " and saved user ID " + savedUserId);
        }
    }

//    public void deleteASavedProfile(Long id) {
//        Optional<SavedProfileEntity> savedProfileEntityOptional = savedRepo.findById(id);
//
//        if (savedProfileEntityOptional.isPresent()) {
//            savedRepo.delete(savedProfileEntityOptional.get());
//        } else {
//            throw new RuntimeException(String.format("Saved Profile with ID %d not found", id) );
//        }
//    }
}
