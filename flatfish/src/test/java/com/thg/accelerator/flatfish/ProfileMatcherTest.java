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
        UserEntity alice = new UserEntity("1", "alice", "1, 1, 2001", 20, "desc", "FEMALE", "@Alice", 100, 1000, 20, 80, Gender.MALE, List.of(), "", "", "");
        UserEntity bob = new UserEntity("2", "bob", "9, 9, 1999", 30, "bobdesc", "MALE", "@Bob", 150, 900, 20, 80, Gender.FEMALE, List.of(), "", "", "");
        List<UserEntity> allUsers = List.of(alice, bob);


        List<UserEntity> matches = profileMatcher.matchProfiles(allUsers, "35", "70", "200", "900", "female");

        Assertions.assertEquals(alice, matches.get(0));
    }

//    @Disabled
//    @Test
//    public void testNoGenderPreferenceReturnsAllGenders() {
//        UserEntity alice = new UserEntity("1", "alice", "1, 1, 2001", 20, "desc", "FEMALE", "@Alice", 100, 1000, 20, 80, Gender.MALE, 1L, 2L, 3L);
//        UserEntity bob = new UserEntity("2", "bob", "9, 9, 1999", 30, "bobdesc", "MALE", "@Bob", 150, 900, 20, 80, Gender.FEMALE, 1L, 2L, 3L);
//        List<UserEntity> allUsers = List.of(alice, bob);
//
//
//        List<UserEntity> matches = profileMatcher.matchProfiles(allUsers, "35", "70", "200", "900", "");
//
//        Assertions.assertEquals(allUsers, matches);
//    }

//    @Disabled
//    @Test
//    public void testMatchProfileWithScoreReturnsSimilarProfile() {
//        UserEntity alice = new UserEntity("1", "alice", "1, 1, 2001", 20, "desc", "FEMALE", "@Alice", 100, 1000, 20, 80, Gender.MALE, 1L, 2L, 3L);
//        UserEntity bob = new UserEntity("2", "bob", "9, 9, 1999", 30, "bobdesc", "MALE", "@Bob", 150, 900, 20, 80, Gender.FEMALE, 1L, 2L, 3L);
//        List<UserEntity> allUsers = List.of(alice, bob);
//        Map<UserEntity, Double> userMap = new HashMap<>();
//        userMap.put(alice, 2.5);
//        userMap.put(bob, 25.124689052802225);
//
//
//        Map<UserEntity, Double> matches = profileMatcher.matchProfilesWithScore(allUsers, "35", "70", "200", "900", "");
//
//        Assertions.assertEquals(userMap, matches);
//    }
}
