package com.thg.accelerator.flatfish.service;
// <<<<<<< HEAD
import com.thg.accelerator.flatfish.entities.PreferenceEntity;
import com.thg.accelerator.flatfish.entities.SavedProfileEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.repositories.PreferencesRepo;
import com.thg.accelerator.flatfish.repositories.SavedProfileRepo;
//import com.thg.accelerator.flatfish.repositories.UserLocationsRepo;
// =======
// import com.thg.accelerator.flatfish.entities.UserEntity;
// import com.thg.accelerator.flatfish.repositories.PreferencesRepo;
// >>>>>>> dev
import com.thg.accelerator.flatfish.repositories.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.*;


@Service
public class UserService {
    @Autowired
    private PreferencesRepo preferencesRepo;

    @Autowired
    private UsersRepo usersRepo;

    @Autowired
    private ProfileMatcher profileMatcher;

    public Optional<List<UserEntity>> getMatchingProfiles(Map<String, String> preferences) {
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
        String location1 = preferences.get("location1");
        String location2 = preferences.get("location2");
        String location3 = preferences.get("location3");


        List<UserEntity> allUsers = usersRepo.findAll();
        // matching algorithm...
        //return Optional.of(usersRepo.findAll());
        return Optional.of(profileMatcher.matchProfiles(allUsers, ageMin, ageMax, budgetMin, budgetMax, gender,location1,location2,location3));
    }

//    public Optional<List<UserEntity>> getMatchingProfiles(String userId) {
//        Optional<UserEntity> optionalUser = usersRepo.findById(userId);
//
//        if (optionalUser.isEmpty()) {
//            return Optional.empty();
//        } else {
//            List<UserEntity> allUsers = usersRepo.findAll();
//
//            return Optional.of(profileMatcher.matchProfiles(
//                    allUsers,
//                    optionalUser.get().getAgeMin(),
//                    optionalUser.get().getAgeMax(),
//                    optionalUser.get().getBudgetMin(),
//                    optionalUser.get().getBudgetMax(),
//                    optionalUser.get().getGender()));
//        }
//    }

    public Optional<List<UserEntity>> getAllUsers() {
        return Optional.of(usersRepo.findAll());
    }

    public Optional<UserEntity> getUserById(String userId) {
        return usersRepo.findById(userId);
    }

    public void addUser(UserEntity userEntity) {
        usersRepo.save(userEntity);
    }

    public void updatePreference(String id, UserEntity userEntity) {
        UserEntity user = usersRepo.findById(id).get();
        user.setBudgetMin(userEntity.getBudgetMin());
        user.setBudgetMax(userEntity.getBudgetMax());
        user.setAgeMin(userEntity.getAgeMin());
        user.setAgeMax(userEntity.getAgeMax());
        user.setGender(userEntity.getGender());
        usersRepo.save(user);
    }

    // TODO: Replace with vector similarity methods
    public Optional<HashMap<UserEntity, Integer>> getStronglyMatchingUsers(String userId) {
        List<UserEntity> allUsers = getAllUsers().get();
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

//    public List<SavedProfileEntity> getAllSavedProfiles(){
//        return savedProfileRepo.findAll();
//    }
}
