//package com.thg.accelerator.flatfish.controllers;
//
//
//import com.thg.accelerator.flatfish.dto.SavedProfileDetailDto;
//import com.thg.accelerator.flatfish.dto.SavedProfileDto;
//import com.thg.accelerator.flatfish.dto.UserDto;
//import com.thg.accelerator.flatfish.entities.UserEntity;
//import com.thg.accelerator.flatfish.repositories.UsersRepo;
//import com.thg.accelerator.flatfish.entities.SavedProfileEntity;
//import com.thg.accelerator.flatfish.service.SavedProfileService;
//import com.thg.accelerator.flatfish.service.UserService;
//import com.thg.accelerator.flatfish.transformer.SavedProfileTransformer;
//import com.thg.accelerator.flatfish.transformer.Transformer;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
//
//import java.net.URI;
//import java.util.List;
//import java.util.Map;
//import java.util.stream.Collectors;
//
//import static java.util.Arrays.stream;
//
//@RequestMapping("/api/v1")
//@RestController
//@CrossOrigin(origins="http://localhost:3000")
////https://flatfish-frontend.pq46c.icekube.ics.cloud
////http://localhost:3000
//public class Controller {
//    private final UserService userService;
//    private final SavedProfileService savedProfileService;
//    private final UsersRepo usersRepo;
//
//
//    Controller(UserService userService, SavedProfileService savedProfileService, UsersRepo usersRepo) {
//        this.userService = userService;
//        this.savedProfileService = savedProfileService;
//        this.usersRepo = usersRepo;
//    }
//
//    @GetMapping("/matches")
//    public ResponseEntity<List<UserDto>> getMatchingProfiles(@RequestParam Map<String, String> preferences) {
//        return userService
//                .getMatchingProfiles(preferences)
//            .map(tasks -> tasks.stream()
//            .map(Transformer::transformUserEntityToDto)
//                        .collect(Collectors.toList()))
//            .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//}
//
//
//
//
////@GetMapping("/matchuser")
////    public ResponseEntity<List<UserDto>> getMatchingProfilesWithoutPreferences(@RequestParam String userId) {
////        return userService
////                .getMatchingProfiles(userId)
////                .map(tasks -> tasks.stream()
////                        .map(Transformer::transformUserEntityToDto)
////                        .collect(Collectors.toList()))
////                .map(ResponseEntity::ok)
////                .orElse(ResponseEntity.notFound().build());
////    }
//
////    @GetMapping("/match/find?strategy=strong")
////    public ResponseEntity<HashMap<UserDto, Integer>> getStrongMatches(String userId) {
////        HashMap<UserEntity, Integer> input = userService.getStronglyMatchingUsers(userId).get();
////        HashMap<UserDto, Integer> output = new HashMap<>();
////        input.forEach((entry, value) -> output.put(Transformer.transformUserEntityToDto(entry), value));
////
////        return ResponseEntity.of(Optional.of(output));
////    }
//
//    @GetMapping("/users")
//    public ResponseEntity<List<UserDto>> getAllUsers() {
//        return userService
//                .getAllUsers()
//                .map(user -> user.stream()
//                        .map(Transformer::transformUserEntityToDto)
//                        .collect(Collectors.toList()))
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
//
//    @GetMapping("/users/{id}")
//    public ResponseEntity<UserDto> getUserById(@PathVariable String id) {
//        return userService.getUserById(id)
//                .map(Transformer::transformUserEntityToDto)
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
//
//    @PostMapping
//    public ResponseEntity<UserDto> addUser(@RequestBody final UserDto userDto) {
//        userService.addUser(Transformer.transformUserDtoToEntity(userDto));
//
//        var location = MvcUriComponentsBuilder
//                .fromMethodName(Controller.class, "getUserById", userDto.getUserId())
//                .buildAndExpand(userDto.getUserId())
//                .toUri();
//
//        return ResponseEntity.created(location).body(userDto);
//    }
//
////    @PostMapping
////    public ResponseEntity<SavedProfileDto> addSavedProfile(@RequestBody final SavedProfileDto savedProfileDto){
////        // takes in a profile entity and returns a profile dto
////
////        savedProfileService.saveAProfile(Transformer.transformSavedProfileDtoToEntity(savedProfileDto));
////
////        var location = MvcUriComponentsBuilder
////                .fromMethodName(Controller.class, "getUserById", savedProfileDto.getUserId())
////                .buildAndExpand(savedProfileDto.getUserId())
////                .toUri();
////        return ResponseEntity.created(location).body(savedProfileDto);
////    }
//
//    @PostMapping("/savedprofiles")
//    public ResponseEntity<SavedProfileDto> addSavedProfile(@RequestBody SavedProfileDto savedProfileDto) {
//        savedProfileService.saveAProfile(savedProfileDto.getUserId(), SavedProfileTransformer.transformSavedProfileDtoToEntity(savedProfileDto, usersRepo));
//        URI location = MvcUriComponentsBuilder.fromMethodName(Controller.class, "getUserById", savedProfileDto.getUserId())
//                .buildAndExpand(savedProfileDto.getUserId())
//                .toUri();
//        return ResponseEntity.created(location).body(savedProfileDto);
//    }
//
//    @DeleteMapping("/savedprofiles/{savedProfileId}")
//    public ResponseEntity<SavedProfileDto> deleteSavedProfile(@PathVariable Long savedProfileId) {
//        try {
//            savedProfileService.deleteASavedProfile(savedProfileId);
//            return ResponseEntity.ok().build();
//        } catch (RuntimeException e) {
//            return ResponseEntity.notFound().build();
//        } catch (Exception e) {
//            return ResponseEntity.internalServerError().build();
//        }
//    }
//
//    @GetMapping("/savedprofiles")
//    public ResponseEntity<List<SavedProfileDto>> getAllSavedProfiles(){
//        return savedProfileService
//                .getAllSavedProfiles()
//                .map(profile -> profile.stream()
//                        .map(SavedProfileTransformer::transformSavedProfileEntityToDto)
//                        .collect(Collectors.toList()))
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
////    @GetMapping("/savedprofiles/{userId}")
////    public ResponseEntity<List<UserEntity>> getSavedProfileByUser(@PathVariable String userId){
////        List<UserEntity> savedProfiles = savedProfileService.getSavedProfileById(userId);
////        return ResponseEntity.ok(savedProfiles);
////    }
//
////    @GetMapping("/savedprofiles/{savingUserId}")
////    public ResponseEntity<List<SavedProfileDto>> getAllSavedProfilesOfAUser(@PathVariable String savingUserId){
////        List<SavedProfileEntity> savedProfiles = savedProfileService.getAllSavedProfilesBySavingUser(savingUserId);
////
////        if (savedProfiles.isEmpty()) {
////            return ResponseEntity.notFound().build();
////        } else {
////            List<SavedProfileDto> savedProfileDtos = savedProfiles.stream()
////                    .map(SavedProfileTransformer::transformSavedProfileEntityToDto)
////                    .collect(Collectors.toList());
////            return ResponseEntity.ok(savedProfileDtos);
////        }
////    }
//
//    @GetMapping("/savedprofiles/{savingUserId}")
//    public ResponseEntity<List<SavedProfileDetailDto>> getAllDetailedSavedProfilesOfAUser(@PathVariable String savingUserId) {
//        List<SavedProfileDetailDto> savedProfilesDetails = savedProfileService.getAllSavedProfilesDetailsBySavingUser(savingUserId);
//        if (!savedProfilesDetails.isEmpty()) {
//            return ResponseEntity.ok(savedProfilesDetails);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//    @PutMapping("/update/preference/{id}")
//    public ResponseEntity<UserDto> addPreference(@PathVariable("id") String id,
//            @RequestBody final UserDto userDto) {
//        userService.updatePreference(id, Transformer.transformUserDtoToEntity(userDto));
//
//        try {
//            return ResponseEntity.ok(userDto);
//            // Need custom exception
//        } catch (Exception e) {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//
//}
package com.thg.accelerator.flatfish.controllers;


import com.thg.accelerator.flatfish.dto.SavedProfileDetailDto;
import com.thg.accelerator.flatfish.dto.SavedProfileDto;
import com.thg.accelerator.flatfish.dto.ScoreDto;
import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.exception.UserNotFoundException;
import com.thg.accelerator.flatfish.repositories.UsersRepo;
import com.thg.accelerator.flatfish.entities.SavedProfileEntity;
import com.thg.accelerator.flatfish.service.SavedProfileService;
import com.thg.accelerator.flatfish.service.UserService;
import com.thg.accelerator.flatfish.transformer.SavedProfileTransformer;
import com.thg.accelerator.flatfish.transformer.ScoreTransformer;
import com.thg.accelerator.flatfish.transformer.Transformer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;

@RequestMapping("/api/v1")
@RestController
@CrossOrigin(origins="https://flatfish-frontend.pq46c.icekube.ics.cloud")
//https://flatfish-frontend.pq46c.icekube.ics.cloud
//http://localhost:3000
public class Controller {
    private final UserService userService;
    private final SavedProfileService savedProfileService;
    private final UsersRepo usersRepo;


    Controller(UserService userService, SavedProfileService savedProfileService, UsersRepo usersRepo) {
        this.userService = userService;
        this.savedProfileService = savedProfileService;
        this.usersRepo = usersRepo;
    }

    @GetMapping("/matches")
    public ResponseEntity<List<UserDto>> getMatchingProfiles(@RequestParam Map<String, String> preferences) {
        return userService
                .getMatchingProfiles(preferences)
                .map(tasks -> tasks.stream()
                        .map(Transformer::transformUserEntityToDto)
                        .collect(Collectors.toList()))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/matchuser")
    public ResponseEntity<List<UserDto>> getMatchingProfilesWithoutPreferences(@RequestParam String userId) {
        return userService
                .getMatchingProfiles(userId)
                .map(user -> user.stream()
                        .map(Transformer::transformUserEntityToDto)
                        .collect(Collectors.toList()))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/score")
    public ResponseEntity<List<ScoreDto>> getMatchingProfilesWithScores(@RequestParam String userId) {
        return userService.getMatchingUsersWithScores(userId)
                .map(userMap -> userMap.entrySet().stream()
                        .map(entry -> ScoreTransformer.transformScoreToDto(entry.getKey(), entry.getValue()))
                        .collect(Collectors.toList())
                )
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        return userService
                .getAllUsers()
                .map(user -> user.stream()
                        .map(Transformer::transformUserEntityToDto)
                        .collect(Collectors.toList()))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable String id) {
        return userService.getUserById(id)
                .map(Transformer::transformUserEntityToDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<UserDto> addUser(@RequestBody final UserDto userDto) {
        userService.addUser(Transformer.transformUserDtoToEntity(userDto));

        var location = MvcUriComponentsBuilder
                .fromMethodName(Controller.class, "getUserById", userDto.getUserId())
                .buildAndExpand(userDto.getUserId())
                .toUri();

        return ResponseEntity.created(location).body(userDto);
    }

//    @PostMapping
//    public ResponseEntity<SavedProfileDto> addSavedProfile(@RequestBody final SavedProfileDto savedProfileDto){
//        // takes in a profile entity and returns a profile dto
//
//        savedProfileService.saveAProfile(Transformer.transformSavedProfileDtoToEntity(savedProfileDto));
//
//        var location = MvcUriComponentsBuilder
//                .fromMethodName(Controller.class, "getUserById", savedProfileDto.getUserId())
//                .buildAndExpand(savedProfileDto.getUserId())
//                .toUri();
//        return ResponseEntity.created(location).body(savedProfileDto);
//    }

//    @PostMapping("/savedprofiles/{savingUserId}")
//    public ResponseEntity<SavedProfileDto> addSavedProfile(@PathVariable String savingUserId, @RequestBody SavedProfileDto savedProfileDto) {
//        savedProfileService.saveAProfile(savingUserId, savedProfileDto.getUserId(), SavedProfileTransformer.transformSavedProfileDtoToEntity(savedProfileDto, usersRepo));
//        URI location = MvcUriComponentsBuilder.fromMethodName(Controller.class, "getUserById", savedProfileDto.getUserId())
//                .buildAndExpand(savedProfileDto.getUserId())
//                .toUri();
//        return ResponseEntity.created(location).body(savedProfileDto);
//    }

//    @PostMapping("/api/v1/savedprofiles/{savingUserId}")
//    public ResponseEntity<String> saveProfile(
//            @PathVariable String savingUserId,
//            @RequestBody SavedProfileDto savedProfileDto,
//            String savedUserId) {
//        savedProfileService.saveAProfile(savingUserId, SavedProfileTransformer.transformSavedProfileDtoToEntity(savedProfileDto), savedUserId);
//        return ResponseEntity.status(HttpStatus.CREATED).body("Profile saved successfully");
//    }

//    @PostMapping("/savedprofiles")
//    public ResponseEntity<SavedProfileDto> addSavedProfile(@RequestBody SavedProfileDto savedProfileDto) {
//        SavedProfileEntity savedProfileEntity = SavedProfileTransformer.transformSavedProfileDtoToEntity(savedProfileDto);
//        savedProfileService.saveAProfile(savedProfileEntity);
//        return ResponseEntity.ok(savedProfileDto); // Or you can return the transformed DTO from the saved entity
//    }

//
//    @PostMapping("/savedprofiles")
//    public ResponseEntity<SavedProfileDto> addSavedProfile(@RequestBody SavedProfileDto savedProfileDto) {
//        savedProfileService.saveAProfile(savedProfileDto.getUserId(), SavedProfileTransformer.transformSavedProfileDtoToEntity(savedProfileDto, usersRepo));
//        URI location = MvcUriComponentsBuilder.fromMethodName(Controller.class, "getUserById", savedProfileDto.getUserId())
//                .buildAndExpand(savedProfileDto.getUserId())
//                .toUri();
//        return ResponseEntity.created(location).body(savedProfileDto);
//    }

    @PostMapping("/savedprofiles/{savingUserId}/{savedUserId}")
    public ResponseEntity<String> saveProfile(@RequestBody SavedProfileEntity savedProfileEntity, @PathVariable String savingUserId, @PathVariable String savedUserId){

        try {
            savedProfileService.saveAProfile(savingUserId, savedProfileEntity, savedUserId);
            return ResponseEntity.ok("Profile saved successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while saving the profile");
        }
    }

    @DeleteMapping("/savedprofiles/{savingUserId}/{savedUserId}")
    public ResponseEntity<Void> deleteSavedProfile(@PathVariable String savingUserId, @PathVariable String savedUserId) {
        try {
            savedProfileService.deleteASavedProfileByUserIds(savingUserId, savedUserId);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    //    @DeleteMapping("/savedprofiles/{savedUserId}")
//    public ResponseEntity<SavedProfileDto> deleteSavedProfile(@PathVariable String savedUserId) {
//        try {
//            savedProfileService.deleteASavedProfile(savedUserId);
//            return ResponseEntity.ok().build();
//        } catch (RuntimeException e) {
//            return ResponseEntity.notFound().build();
//        } catch (Exception e) {
//            return ResponseEntity.internalServerError().build();
//        }
//    }

    @GetMapping("/savedprofiles")
    public ResponseEntity<List<SavedProfileDto>> getAllSavedProfiles(){
        return savedProfileService
                .getAllSavedProfiles()
                .map(profile -> profile.stream()
                        .map(SavedProfileTransformer::transformSavedProfileEntityToDto)
                        .collect(Collectors.toList()))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

//    @GetMapping("/savedprofiles/{savingUserId}")
//    public ResponseEntity<List<SavedProfileDto>> getAllSavedProfilesOfAUser(@PathVariable String savingUserId){
//        List<SavedProfileEntity> savedProfiles = savedProfileService.getAllSavedProfilesBySavingUser(savingUserId);
//
//        if (savedProfiles.isEmpty()) {
//            return ResponseEntity.notFound().build();
//        } else {
//            List<SavedProfileDto> savedProfileDtos = savedProfiles.stream()
//                    .map(SavedProfileTransformer::transformSavedProfileEntityToDto)
//                    .collect(Collectors.toList());
//            return ResponseEntity.ok(savedProfileDtos);
//        }
//    }

    @GetMapping("/savedprofiles/{savingUserId}")
    public ResponseEntity<List<SavedProfileDetailDto>> getAllDetailedSavedProfilesOfAUser(@PathVariable String savingUserId) {
        List<SavedProfileDetailDto> savedProfilesDetails = savedProfileService.getAllSavedProfilesDetailsBySavingUser(savingUserId);
        if (!savedProfilesDetails.isEmpty()) {
            return ResponseEntity.ok(savedProfilesDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/preference/{id}")
    public ResponseEntity<UserDto> addPreference(@PathVariable("id") String id,
            @RequestBody final UserDto userDto) {

        try {
            userService.updatePreference(id, Transformer.transformUserDtoToEntity(userDto));
            return ResponseEntity.ok(userDto);
        } catch (UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
