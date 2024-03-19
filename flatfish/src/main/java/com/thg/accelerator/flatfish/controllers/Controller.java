package com.thg.accelerator.flatfish.controllers;


import com.thg.accelerator.flatfish.dto.SavedProfileDto;
import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.entities.SavedProfileEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.repositories.UsersRepo;
import com.thg.accelerator.flatfish.service.SavedProfileService;
import com.thg.accelerator.flatfish.service.UserService;
import com.thg.accelerator.flatfish.transformer.SavedProfileTransformer;
import com.thg.accelerator.flatfish.transformer.Transformer;
import jakarta.websocket.server.PathParam;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;

@RequestMapping("/api/v1")
@RestController
@CrossOrigin(origins="http://localhost:3000")
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
                .map(tasks -> tasks.stream()
                        .map(Transformer::transformUserEntityToDto)
                        .collect(Collectors.toList()))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/match/find?strategy=strong")
    public ResponseEntity<HashMap<UserDto, Integer>> getStrongMatches(String userId) {
        HashMap<UserEntity, Integer> input = userService.getStronglyMatchingUsers(userId).get();
        HashMap<UserDto, Integer> output = new HashMap<>();
        input.forEach((entry, value) -> output.put(Transformer.transformUserEntityToDto(entry), value));

        return ResponseEntity.of(Optional.of(output));
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

    @PostMapping("/savedprofiles")
    public ResponseEntity<SavedProfileDto> addSavedProfile(@RequestBody SavedProfileDto savedProfileDto) {
        savedProfileService.saveAProfile(savedProfileDto.getUserId(), SavedProfileTransformer.transformSavedProfileDtoToEntity(savedProfileDto, usersRepo));
        URI location = MvcUriComponentsBuilder.fromMethodName(Controller.class, "getUserById", savedProfileDto.getUserId())
                .buildAndExpand(savedProfileDto.getUserId())
                .toUri();
        return ResponseEntity.created(location).body(savedProfileDto);
    }

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

    @PutMapping("/update/preference/{id}")
    public ResponseEntity<UserDto> addPreference(@PathVariable("id") String id,
            @RequestBody final UserDto userDto) {
        userService.updatePreference(id, Transformer.transformUserDtoToEntity(userDto));

        try {
            return ResponseEntity.ok(userDto);
            // Need custom exception
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
