package com.thg.accelerator.flatfish.controllers;


import com.sun.java.accessibility.util.Translator;
import com.thg.accelerator.flatfish.dto.PreferenceDto;
import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.entities.PreferenceEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.exception.ResourceNotFoundException;
import com.thg.accelerator.flatfish.service.PreferenceService;
import com.thg.accelerator.flatfish.service.UserService;
import com.thg.accelerator.flatfish.transformer.Transformer;
import com.thg.accelerator.flatfish.transformer.TransformerPreference;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RequestMapping("/api/v1")
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class Controller {
    private final UserService userService;

    private final PreferenceService preferenceService;

    private final Transformer transformer;

//    private final TransformerPreference transformerPreference;

    public Controller(UserService userService,
                      PreferenceService preferenceService,
                      Transformer transformer) {
        this.userService = userService;
        this.preferenceService = preferenceService;
        this.transformer = transformer;
//        this.transformerPreference = transformerPreference;
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

//    @GetMapping("/match/find?strategy=strong")
//    public ResponseEntity<HashMap<UserDto, Integer>> getStrongMatches(String userId) {
//        HashMap<UserEntity, Integer> input = userService.getStronglyMatchingUsers(userId).get();
//        HashMap<UserDto, Integer> output = new HashMap<>();
//        input.forEach((entry, value) -> output.put(Transformer.transformUserEntityToDto(entry), value));
//
//        return ResponseEntity.of(Optional.of(output));
//    }

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

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable String id) {
        return userService.getUserById(id)
                .map(Transformer::transformUserEntityToDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/preferences")
    public ResponseEntity<List<PreferenceEntity>> getAllPreferences() {
        return ResponseEntity.of(Optional.of(userService.getAllPreferences()));
    }

    @PostMapping
    public ResponseEntity<UserDto> addUser(@RequestBody final UserDto userDto) {
        userService.addUser(transformer.transformUserDtoToEntity(userDto));

        var location = MvcUriComponentsBuilder
                .fromMethodName(Controller.class, "getUserById", userDto.getUserId())
                .buildAndExpand(userDto.getUserId())
                .toUri();

        return ResponseEntity.created(location).body(userDto);
    }

    @PostMapping("/profile")
    public ResponseEntity<PreferenceDto> createPreference(@RequestBody final PreferenceDto preferenceDto) {
        preferenceService.createPreference(preferenceDto);

        var location = MvcUriComponentsBuilder
                .fromMethodName(Controller.class, "getUserById", preferenceDto.getUserId())
                .buildAndExpand(preferenceDto.getUserId())
                .toUri();

        return ResponseEntity.created(location).body(preferenceDto);
    }

    @PutMapping("/profile")
    public ResponseEntity<PreferenceDto> updatePreference(@PathVariable final String userId, @RequestBody final PreferenceDto preferenceDto) {
        try {
            PreferenceDto updatedPreferenceDto = preferenceService.updatePreferenceAndLocations(userId, preferenceDto);
            return ResponseEntity.ok(updatedPreferenceDto);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
