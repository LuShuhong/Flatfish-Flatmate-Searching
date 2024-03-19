package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.entities.SavedProfileEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.repositories.SavedProfileRepo;
import com.thg.accelerator.flatfish.repositories.UsersRepo;
import com.thg.accelerator.flatfish.transformer.Transformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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


    public void saveAProfile(String userId, SavedProfileEntity savedProfileEntity) {
        // Find the user by ID
        Optional<UserEntity> userEntityOptional = usersRepo.findById(userId);

        if (userEntityOptional.isPresent()) {
            UserEntity userEntity = userEntityOptional.get();
            savedProfileEntity.setSavingUser(userEntity);; // Set the user for the saved profile
            savedRepo.save(savedProfileEntity);
        } else {
            // Handle case where user is not found
            throw new IllegalArgumentException("User with ID " + userId + " not found");
        }
    }

    public Optional<SavedProfileEntity> getProfileById(Long savedProfileId) {
        return savedRepo.findById(savedProfileId);
    }

    public void deleteASavedProfile(Long id) {
        Optional<SavedProfileEntity> savedProfileEntityOptional = savedRepo.findById(id);

        if (savedProfileEntityOptional.isPresent()) {
            savedRepo.delete(savedProfileEntityOptional.get());
        } else {
            throw new RuntimeException(String.format("Saved Profile with ID %d not found", id) );
        }
    }
}
