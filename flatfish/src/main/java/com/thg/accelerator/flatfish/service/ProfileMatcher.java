package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.entities.Gender;
import com.thg.accelerator.flatfish.entities.UserEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ProfileMatcher {

    //need changing threshold
    public final int threshold = 99999999;

    public List<UserEntity> matchProfiles(List<UserEntity> allUsers, String ageMinStr, String ageMaxStr, String budgetMinStr, String budgetMaxStr, String gender){

        double ageMin = Double.parseDouble(ageMinStr);
        double ageMax = Double.parseDouble(ageMaxStr);
        double budgetMin = Double.parseDouble(budgetMinStr);
        double budgetMax = Double.parseDouble(budgetMaxStr);

        List<UserEntity> dealBreakerMatches = getDealbreakerMatches(allUsers, ageMin, ageMax, budgetMin, budgetMax);

        if(gender.equalsIgnoreCase("male") || gender.equalsIgnoreCase("female")) {
            dealBreakerMatches = dealBreakerMatches.stream()
                    .filter(user -> user.getUserGender()
                            //if Gender enum is removed, toString can be removed
                            .toString()
                            .equalsIgnoreCase(gender))
                    .toList();
        }

        List<UserEntity> matchedProfiles = new ArrayList<>();
        double[] userVector = preferenceToVector(ageMin, ageMax, budgetMin, budgetMax);

        for(UserEntity user: dealBreakerMatches) {
            double[] candidateVector = preferenceToVector(user.getAgeMin(), user.getAgeMax(), user.getBudgetMin(), user.getBudgetMax());
            double distance = calculateEuclideanDistance(userVector, candidateVector);

            if (distance < threshold) {
                matchedProfiles.add(user);
            }
        }

        //want to sort before return?
        return matchedProfiles;
    }

    public List<UserEntity> matchProfiles(List<UserEntity> allUsers, Long ageMinLong, Long ageMaxLong, Long budgetMinLong, Long budgetMaxLong, Gender userGender) {
        double ageMin = (double) ageMinLong;
        double ageMax = (double) ageMaxLong;
        double budgetMin = (double) budgetMinLong;
        double budgetMax = (double) budgetMaxLong;
        String gender = userGender.toString().toLowerCase();

        List<UserEntity> dealBreakerMatches = getDealbreakerMatches(allUsers, ageMin, ageMax, budgetMin, budgetMax);

        if(gender.equalsIgnoreCase("male") || gender.equalsIgnoreCase("female")) {
            dealBreakerMatches = dealBreakerMatches.stream()
                    .filter(user -> user.getUserGender()
                            .equalsIgnoreCase(gender))
                    .toList();
        }

        List<UserEntity> matchedProfiles = new ArrayList<>();
        double[] userVector = preferenceToVector(ageMin, ageMax, budgetMin, budgetMax);

        for(UserEntity user: dealBreakerMatches) {
            double[] candidateVector = preferenceToVector(user.getAgeMin(), user.getAgeMax(), user.getBudgetMin(), user.getBudgetMax());
            double distance = calculateEuclideanDistance(userVector, candidateVector);

            if (distance < threshold) {
                matchedProfiles.add(user);
            }
        }

        //want to sort before return?
        return matchedProfiles;
    }

    public Map<UserEntity, Double> matchProfilesWithScore(List<UserEntity> allUsers, String ageMinStr, String ageMaxStr, String budgetMinStr, String budgetMaxStr, String gender){

        double ageMin = Double.parseDouble(ageMinStr);
        double ageMax = Double.parseDouble(ageMaxStr);
        double budgetMin = Double.parseDouble(budgetMinStr);
        double budgetMax = Double.parseDouble(budgetMaxStr);

        List<UserEntity> dealBreakerMatches = getDealbreakerMatches(allUsers, ageMin, ageMax, budgetMin, budgetMax);

        if(gender.equalsIgnoreCase("male") || gender.equalsIgnoreCase("female")) {
            dealBreakerMatches = dealBreakerMatches.stream()
                    .filter(user -> user.getUserGender()
                            //if Gender enum is removed, toString can be removed
                            .toString()
                            .equalsIgnoreCase(gender))
                    .toList();
        }

        Map<UserEntity, Double> matchedProfiles = new HashMap<>();
        double[] userVector = preferenceToVector(ageMin, ageMax, budgetMin, budgetMax);

        for(UserEntity user: dealBreakerMatches) {
            double[] candidateVector = preferenceToVector(user.getAgeMin(), user.getAgeMax(), user.getBudgetMin(), user.getBudgetMax());
            double distance = calculateEuclideanDistance(userVector, candidateVector);

            if (distance < threshold) {
                matchedProfiles.put(user, distance);
            }
        }

        //want to sort before return?
        return matchedProfiles;
//        return allUsers;
    }

    private double calculateEuclideanDistance(double[] vectorA, double[] vectorB) {
        double sum = 0;
        for(int i = 0; i < vectorA.length; i++) {
            sum += Math.pow(vectorA[i] - vectorB[i], 2);
        }
        return Math.sqrt(sum);
    }


    //depending on if more filters used, refine the preferenceToVector
    private double[] preferenceToVector(double ageMin, double ageMax, double budgetMin, double budgetMax) {

        return new double[]{
                (ageMin+ageMax) /2.0,
                (budgetMin+budgetMax) /2.0
        };
    }

    private List<UserEntity> getDealbreakerMatches(List<UserEntity> allUsers, double ageMin, double ageMax, double budgetMin, double budgetMax) {
        return allUsers.stream()
                .filter(pref -> pref.getAgeMax() >= ageMin)
                .filter(pref -> pref.getAgeMin() <= ageMax)
                .filter(pref -> pref.getBudgetMax() >= budgetMin)
                .filter(pref -> pref.getBudgetMin() <= budgetMax)
                .toList();
    }
}
