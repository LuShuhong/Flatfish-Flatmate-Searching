package com.thg.accelerator.flatfish.controllers;


import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.entities.PreferenceEntity;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.service.UserService;
import com.thg.accelerator.flatfish.transformer.Transformer;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequestMapping("/api/v1")
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class Controller {
    private final UserService userService;

    Controller(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/matches")
    public List<UserDto> getMatchingProfiles(@RequestParam Map<String, String> preferences) {
        return userService
                .getMatchingProfiles(preferences)
                .stream()
                .map(Transformer :: transformUserEntityToDto)
                .toList();

    }

    @GetMapping("/match/find?strategy=strong")
    public ResponseEntity<HashMap<UserDto, Integer>> getStrongMatches(String userId) {
        HashMap<UserEntity, Integer> input = userService.getStronglyMatchingUsers(userId).get();
        HashMap<UserDto, Integer> output = new HashMap<>();
        input.forEach((entry, value) -> output.put(Transformer.transformUserEntityToDto(entry), value));

        return ResponseEntity.of(Optional.of(output));
    }

    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/preferences")
    public List<PreferenceEntity> getAllPreferences() {return userService.getAllPreferences();}

    @PostMapping
    public void addUser(@RequestBody final UserEntity userEntity) {
        userService.addUser(userEntity);
    }
}
