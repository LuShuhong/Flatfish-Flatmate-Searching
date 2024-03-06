package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.repositories.entities.UserEntity;
import com.thg.accelerator.flatfish.repositories.entity.PreferenceEntity;
import com.thg.accelerator.flatfish.repositories.entity.UserEntity;
import com.thg.accelerator.flatfish.repositories.repos.PreferencesRepo;
import com.thg.accelerator.flatfish.repositories.repos.UserLocationsRepo;
import com.thg.accelerator.flatfish.repositories.repos.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PreferenceService {
    @Autowired
    private PreferencesRepo preferencesRepo;

    @Autowired
    private UserLocationsRepo userLocationsRepo;

    @Autowired
    private UsersRepo usersRepo;


    public List<UserEntity> getAllUsers() {
        return UsersRepo.findAll();
    }

    public Map<UserEntity, Integer> getStronglyMatchingUsers(PreferenceEntity targetUser) {
        List<UserEntity> allUsers = getAllUsers();
        HashMap<UserEntity, Integer> strongMatches = new HashMap<>();

        for (UserEntity user : allUsers) {
            if (targetUser.getBudgetMin() <= user.getPreferenceEntity().getBudgetMin() && targetUser.getBudgetMax() >= user.getPreferenceEntity().getBudgetMax()) {
                strongMatches.put(user, 500);
            }
        }

        return strongMatches;
    }
}
