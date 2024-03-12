package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.repositories.PreferencesRepo;
import com.thg.accelerator.flatfish.transformer.TransformerPreference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PreferenceService {
    @Autowired
    private PreferencesRepo preferencesRepo;

    private TransformerPreference transformerPreference;

    public PreferenceService(
            PreferencesRepo preferencesRepo,
            TransformerPreference transformerPreference) {

    }
}
