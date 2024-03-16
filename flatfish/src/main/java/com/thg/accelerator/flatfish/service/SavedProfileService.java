package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.entities.SavedProfileEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.repositories.SavedProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


// i need: delete, post and get
// start with get , then post then delete
@Service
public class SavedProfileService {
    @Autowired
    private SavedProfileRepo savedRepo;

    //get all
    public Optional<List<SavedProfileEntity>> getAllSavedProfiles(){
        return Optional.of(savedRepo.findAll());
    }

    //post request
    public void saveAProfile(SavedProfileEntity savedProfileEntity){
         savedRepo.save(savedProfileEntity);
    }

    public Optional<SavedProfileEntity> getProfileById(String savedProfileId) {
        return savedRepo.findById(savedProfileId);
    }

}

