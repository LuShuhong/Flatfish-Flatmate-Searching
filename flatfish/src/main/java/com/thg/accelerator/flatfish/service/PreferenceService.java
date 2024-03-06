package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.repositories.entities.UserEntity;
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
        return usersRepo.findAll();
    }

    // TODO: Replace with vector similarity methods
    public Map<UserEntity, Integer> getStronglyMatchingUsers(UserEntity targetUser) {
        List<UserEntity> allUsers = getAllUsers();
        HashMap<UserEntity, Integer> strongMatches = new HashMap<>();

        for (UserEntity otherUser : allUsers) {
            if (targetUser.getBudgetMin() <= otherUser.getBudgetMin() && targetUser.getBudgetMax() >= otherUser.getBudgetMax()) {
                strongMatches.put(otherUser, 500);
            }
        }

        return strongMatches;
    }
}
