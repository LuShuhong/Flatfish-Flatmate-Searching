package com.thg.accelerator.flatfish;

import com.thg.accelerator.flatfish.entities.Gender;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.service.ProfileMatcher;
import org.apache.catalina.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import static org.mockito.Mockito.mock;

public class ProfileMatcherTest {
    public ProfileMatcher profileMatcher;

    @BeforeEach
    public void setup() {
        this.profileMatcher = new ProfileMatcher();
    }

    @Test
    public void testsCanPass() {
    }

    @Test
    public void testProfileMatcherReturnsSimilarProfile() {
        UserEntity alice = new UserEntity();
        alice.setAge(20);
        alice.setUserGender("female");
        alice.setAgeMin(18);
        alice.setAgeMax(80);
        alice.setBudgetMin(100);
        alice.setBudgetMax(1000);
        alice.setGender(Gender.MALE);
        alice.setLocation1("Deansgate");

        UserEntity bob = new UserEntity();
        bob.setAge(25);
        bob.setUserGender("male");
        bob.setAgeMin(18);
        bob.setAgeMax(100);
        bob.setBudgetMin(200);
        bob.setBudgetMax(800);
        bob.setGender(Gender.FEMALE);
        bob.setLocation1("Deansgate");
        bob.setLocation2("Moss Side");

        List<UserEntity> allUsers = List.of(alice, bob);

        List<UserEntity> matches = profileMatcher.matchProfiles(allUsers, bob.getAgeMin(), bob.getAgeMax(), bob.getBudgetMin(), bob.getBudgetMax(), bob.getGender(), bob.getLocation1(), bob.getLocation2(), bob.getLocation3());

        Assertions.assertEquals(alice, matches.get(0));
    }

    @Test
    public void testNoGenderPreferenceReturnsAllGenders() {
        UserEntity alice = new UserEntity();
        alice.setAge(20);
        alice.setUserGender("female");
        alice.setAgeMin(18);
        alice.setAgeMax(80);
        alice.setBudgetMin(100);
        alice.setBudgetMax(1000);
        alice.setGender(Gender.MALE);
        alice.setLocation1("Deansgate");

        UserEntity bob = new UserEntity();
        bob.setAge(25);
        bob.setUserGender("male");
        bob.setAgeMin(18);
        bob.setAgeMax(100);
        bob.setBudgetMin(200);
        bob.setBudgetMax(800);
        bob.setGender(Gender.UNSPECIFIED);
        bob.setLocation1("Deansgate");
        bob.setLocation2("Moss Side");

        List<UserEntity> allUsers = List.of(alice, bob);

        List<UserEntity> matches = profileMatcher.matchProfiles(allUsers, bob.getAgeMin(), bob.getAgeMax(), bob.getBudgetMin(), bob.getBudgetMax(), bob.getGender(), bob.getLocation1(), bob.getLocation2(), bob.getLocation3());

        Assertions.assertEquals(allUsers, matches);
    }

    @Test
    public void testMatchProfileWithScoreReturnsSimilarProfile() {
        UserEntity alice = new UserEntity();
        alice.setAge(20);
        alice.setUserGender("female");
        alice.setAgeMin(18);
        alice.setAgeMax(80);
        alice.setBudgetMin(100);
        alice.setBudgetMax(1000);
        alice.setGender(Gender.MALE);
        alice.setLocation1("Deansgate");

        UserEntity bob = new UserEntity();
        bob.setAge(25);
        bob.setUserGender("male");
        bob.setAgeMin(18);
        bob.setAgeMax(100);
        bob.setBudgetMin(200);
        bob.setBudgetMax(800);
        bob.setGender(Gender.UNSPECIFIED);
        bob.setLocation1("Deansgate");
        bob.setLocation2("Moss Side");

        UserEntity charlie = new UserEntity();
        charlie.setAge(25);
        charlie.setUserGender("male");
        charlie.setAgeMin(18);
        charlie.setAgeMax(100);
        charlie.setBudgetMin(200);
        charlie.setBudgetMax(780);
        charlie.setGender(Gender.UNSPECIFIED);
        charlie.setLocation1("Deansgate");
        charlie.setLocation2("Moss Side");

        List<UserEntity> allUsers = List.of(alice, bob, charlie);

        Map<UserEntity, Double> expectedResult = new HashMap<>();
        expectedResult.put(bob, 0D);
        expectedResult.put(alice, 50.99019513592785);
        expectedResult.put(charlie, 10D);

        Map<UserEntity, Double> matches = profileMatcher.matchProfilesWithScore(allUsers, bob.getAgeMin(), bob.getAgeMax(), bob.getBudgetMin(), bob.getBudgetMax(), bob.getGender(), bob.getLocation1(), bob.getLocation2(), bob.getLocation3());

        Assertions.assertEquals(expectedResult, matches);
    }
}
