package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.entities.SavedProfileEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.repositories.SavedProfileRepo;
import com.thg.accelerator.flatfish.repositories.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.thg.accelerator.flatfish.dto.SavedProfileDetailDto;

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

    public Optional<List<SavedProfileEntity>> getAllSavedProfiles() {
        return Optional.of(savedRepo.findAll());
    }

    public List<SavedProfileEntity> getAllSavedProfilesBySavingUser(String savingUserId) {
        return savedRepo.findBySavingUserUserId(savingUserId);
    }

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
        targetSavedUserDto.setAge(targetSavedUserEntity.getAge());
        targetSavedUserDto.setDescription(targetSavedUserEntity.getDescription());
        targetSavedUserDto.setUserGender(targetSavedUserEntity.getUserGender());
        targetSavedUserDto.setInstagram(targetSavedUserEntity.getInstagram());
        targetSavedUserDto.setBudgetMin(targetSavedUserEntity.getBudgetMin());
        targetSavedUserDto.setBudgetMax(targetSavedUserEntity.getBudgetMax());
        targetSavedUserDto.setPreferredGender(targetSavedUserEntity.getGender());

        return targetSavedUserDto;
    }

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
