package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.entities.SavedProfileEntity;
import com.thg.accelerator.flatfish.repositories.SavedProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


// i need: delete, post and get
// start with get , then post then delete
@Service
public class SavedProfileService {
    @Autowired
    private SavedProfileRepo savedRepo;

    //get all
    public List<SavedProfileEntity> getAllSavedProfiles(){
        return savedRepo.findAll();
    }

}

