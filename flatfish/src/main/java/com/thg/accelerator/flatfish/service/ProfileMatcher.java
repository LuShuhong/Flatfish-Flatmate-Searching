package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.entities.Gender;
import com.thg.accelerator.flatfish.entities.UserEntity;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.concurrent.ConcurrentSkipListMap;

@Component
public class ProfileMatcher {

    public static final int VECTOR_THRESHOLD = 99999;

    // This method is "user-agnostic" - it doesn't know which user it's matching against. Don't use for now
    public List<UserEntity> matchProfiles(List<UserEntity> allUsers, String ageMinStr, String ageMaxStr, String budgetMinStr, String budgetMaxStr, String gender, String location1, String location2, String location3){

        double ageMin = Double.parseDouble(ageMinStr);
        double ageMax = Double.parseDouble(ageMaxStr);
        double budgetMin = Double.parseDouble(budgetMinStr);
        double budgetMax = Double.parseDouble(budgetMaxStr);

        //want to sort before return?
        return allUsers.stream()
                .filter(user -> user.getAge() >= ageMin)
                .filter(user -> user.getAge() <= ageMax)
                .filter(user -> user.getBudgetMax() >= budgetMin)
                .filter(user -> user.getBudgetMin() <= budgetMax)
                .filter(user -> gender.equalsIgnoreCase("unspecified") || user.getUserGender().equalsIgnoreCase(gender))
                .filter(user -> user.getLocation1().equalsIgnoreCase(location1) || user.getLocation1().equalsIgnoreCase(location2) || user.getLocation1().equalsIgnoreCase(location3)
                        || user.getLocation2().equalsIgnoreCase(location1) || user.getLocation2().equalsIgnoreCase(location2) || user.getLocation2().equalsIgnoreCase(location3)
                        || user.getLocation3().equalsIgnoreCase(location1) || user.getLocation3().equalsIgnoreCase(location2) || user.getLocation3().equalsIgnoreCase(location3))
                .toList();
    }

    // This method gets info from a specific user in the service layer
    public List<UserEntity> matchProfiles(List<UserEntity> allUsers, String userId, Long ageMinLong, Long ageMaxLong, Long budgetMinLong, Long budgetMaxLong, Gender targetGender, String location1, String location2, String location3) {

        double ageMin = ageMinLong.doubleValue();
        double ageMax = ageMaxLong.doubleValue();
        double budgetMin = budgetMinLong.doubleValue();
        double budgetMax = (budgetMaxLong.doubleValue());
        String gender = targetGender.toString();

        List<UserEntity> suitableMatches = allUsers.stream()
                .filter(user -> user.getUserId() != userId)
                .filter(user -> user.getAge() >= ageMin)
                .filter(user -> user.getAge() <= ageMax)
                .filter(user -> user.getBudgetMax() >= budgetMin)
                .filter(user -> user.getBudgetMin() <= budgetMax)
                .filter(user -> gender.equalsIgnoreCase("unspecified") || user.getUserGender().equalsIgnoreCase(gender))
                .filter(user -> user.getLocation1().equalsIgnoreCase(location1) || user.getLocation1().equalsIgnoreCase(location2) || user.getLocation1().equalsIgnoreCase(location3)
                        || user.getLocation2().equalsIgnoreCase(location1) || user.getLocation2().equalsIgnoreCase(location2) || user.getLocation2().equalsIgnoreCase(location3)
                        || user.getLocation3().equalsIgnoreCase(location1) || user.getLocation3().equalsIgnoreCase(location2) || user.getLocation3().equalsIgnoreCase(location3))
                .toList();

        List<UserEntity> vectorMatches = new ArrayList<>();

        for(UserEntity user : suitableMatches) {
            double[] userVector = preferenceToVector(ageMin, ageMax, budgetMin, budgetMax);
            double[] candidateVector = preferenceToVector(user.getAgeMin(), user.getAgeMax(), user.getBudgetMin(), user.getBudgetMax());
            double distance = calculateEuclideanDistance(userVector, candidateVector);

            if (distance < VECTOR_THRESHOLD) {
                vectorMatches.add(user);
            }
        }

        return vectorMatches;
    }

    public Map<UserEntity, Double> matchProfilesWithScore (List<UserEntity> allUsers, String userId, Long ageMinLong, Long ageMaxLong, Long budgetMinLong, Long budgetMaxLong, Gender targetGender, String location1, String location2, String location3) {
        double ageMin = ageMinLong.doubleValue();
        double ageMax = ageMaxLong.doubleValue();
        double budgetMin = budgetMinLong.doubleValue();
        double budgetMax = (budgetMaxLong.doubleValue());
        String gender = targetGender.toString();

        List<UserEntity> suitableMatches = allUsers.stream()
                .filter(user -> user.getUserId() != userId)
                .filter(user -> user.getAge() >= ageMin)
                .filter(user -> user.getAge() <= ageMax)
                .filter(user -> user.getBudgetMax() >= budgetMin)
                .filter(user -> user.getBudgetMin() <= budgetMax)
                .filter(user -> gender.equalsIgnoreCase("unspecified") || user.getUserGender().equalsIgnoreCase(gender))
                .filter(user -> user.getLocation1().equalsIgnoreCase(location1) || user.getLocation1().equalsIgnoreCase(location2) || user.getLocation1().equalsIgnoreCase(location3)
                        || user.getLocation2().equalsIgnoreCase(location1) || user.getLocation2().equalsIgnoreCase(location2) || user.getLocation2().equalsIgnoreCase(location3)
                        || user.getLocation3().equalsIgnoreCase(location1) || user.getLocation3().equalsIgnoreCase(location2) || user.getLocation3().equalsIgnoreCase(location3))
                .toList();

        Map<UserEntity, Double> mappedVectorMatches = new HashMap<>();

        for(UserEntity user : suitableMatches) {
            double[] userVector = preferenceToVector(ageMin, ageMax, budgetMin, budgetMax);
            double[] candidateVector = preferenceToVector(user.getAgeMin(), user.getAgeMax(), user.getBudgetMin(), user.getBudgetMax());
            double distance = calculateEuclideanDistance(userVector, candidateVector);

            if (distance < VECTOR_THRESHOLD) {
                mappedVectorMatches.put(user, distance);
            }
        }

        return mappedVectorMatches;
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
                .filter(pref -> pref.getAge() >= ageMin)
                .filter(pref -> pref.getAge() <= ageMax)
                .filter(pref -> pref.getBudgetMax() >= budgetMin)
                .filter(pref -> pref.getBudgetMin() <= budgetMax)
                .toList();
    }
}
