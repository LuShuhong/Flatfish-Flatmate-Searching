package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.entities.PreferenceEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.repositories.PreferencesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
//probably add relevance sorting?
public class ProfileMatcher {

    //need changing threshold
    public final int THRESHOLD = 99999999;


    public List<String> matchProfiles(List<PreferenceEntity> allUserPreferences, String ageMinStr, String ageMaxStr, String budgetMinStr, String budgetMaxStr, String gender){

        double ageMin = Double.parseDouble(ageMinStr);
        double ageMax = Double.parseDouble(ageMaxStr);
        double budgetMin = Double.parseDouble(budgetMinStr);
        double budgetMax = Double.parseDouble(budgetMaxStr);

        List<PreferenceEntity> dealBreakerMatches =  allUserPreferences.stream()
                .filter(pref -> pref.getAgeMax() >= ageMin)
                .filter(pref -> pref.getAgeMin() <= ageMax)
                .filter(pref -> pref.getBudgetMax() >= budgetMin )
                .filter(pref -> pref.getBudgetMin() <= budgetMax )
                .toList();

        if(gender.equalsIgnoreCase("male") || gender.equalsIgnoreCase("female")) {
            dealBreakerMatches = dealBreakerMatches.stream()
                    .filter(user -> user.getGender()
                            //if Gender enum is removed, toString can be removed
                            .toString()
                            .equalsIgnoreCase(gender))
                    .toList();
        }

        List<String> matchedProfileIds = new ArrayList<>();

        double[] userVector = preferenceToVector(ageMin, ageMax, budgetMin, budgetMax);

        for (PreferenceEntity pref : dealBreakerMatches) {
            double[] candidateVector = preferenceToVector(pref.getAgeMin(), pref.getAgeMax(), pref.getBudgetMin(), pref.getBudgetMax());
            double distance = calculateEuclideanDistance(userVector, candidateVector);

            if (distance < THRESHOLD) {
                matchedProfileIds.add(pref.getUserId());
            }
        }

        //want to sort before return?
        return matchedProfileIds;
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


}
