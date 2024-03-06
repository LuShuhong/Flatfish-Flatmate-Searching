package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.repositories.repos.PreferenceRepo;
import com.thg.accelerator.flatfish.repositories.repos.UserLocationsRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PreferenceService {
    @Autowired
    private PreferenceRepo preferenceRepo;

    @Autowired
    private UserLocationsRepo userLocationsRepo;

    public PreferenceService(

    )
}
