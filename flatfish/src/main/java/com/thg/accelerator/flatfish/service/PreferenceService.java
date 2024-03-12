package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.entities.PreferenceEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.repositories.PreferencesRepo;
import com.thg.accelerator.flatfish.repositories.UserLocationsRepo;
import com.thg.accelerator.flatfish.repositories.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PreferenceService {
    @Autowired
    private PreferencesRepo preferencesRepo;

    @Autowired
    private UserLocationsRepo userLocationsRepo;

    @Autowired
    private UsersRepo usersRepo;

    @Autowired
    private ProfileMatcher profileMatcher;

    public List<UserEntity> getMatchingProfiles(Map<String, String> preferences) {
        /* access the data from the getRequest:
        preferences.get("preferenceId")
        preferences.get("gender")
        preferences.get("ageMin")
        preferences.get("ageMax")
        preferences.get("budgetMin")
        preferences.get("budgetMax")
        */

        String ageMin = preferences.get("ageMin");
        String ageMax = preferences.get("ageMax");
        String budgetMin = preferences.get("budgetMin");
        String budgetMax = preferences.get("budgetMax");
        String gender = preferences.get("gender");

        List<UserEntity> allUsers = usersRepo.findAll();
        // matching algorithm...
        return profileMatcher.matchProfiles(allUsers,ageMin,ageMax,budgetMin,budgetMax, gender);
//        return allUsers;
    }
    public List<UserEntity> getAllUsers() {
        return usersRepo.findAll();
    }

    public List<PreferenceEntity> getAllPreferences() {
        return preferencesRepo.findAll();
    }
    public void addUser(UserEntity userEntity) {
        usersRepo.save(userEntity);
    }

    // TODO: Replace with vector similarity methods
    public Optional<HashMap<UserEntity, Integer>> getStronglyMatchingUsers(String userId) {
        List<UserEntity> allUsers = getAllUsers();
        Optional<UserEntity> targetUser = usersRepo.findById(userId);
        HashMap<UserEntity, Integer> strongMatches = new HashMap<>();

        if (targetUser.isPresent()) {
            for (UserEntity otherUser : allUsers) {
                if (targetUser.get().getBudgetMin() <= otherUser.getBudgetMin() && targetUser.get().getBudgetMax() >= otherUser.getBudgetMax()) {
                    strongMatches.put(otherUser, 500);
                }
            }
        }
        return Optional.of(strongMatches);
    }
}
