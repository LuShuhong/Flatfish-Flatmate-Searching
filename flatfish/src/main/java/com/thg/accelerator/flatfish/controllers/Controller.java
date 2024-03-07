package com.thg.accelerator.flatfish.controllers;


import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.service.PreferenceService;
import com.thg.accelerator.flatfish.transformer.Transformer;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RequestMapping("/api/v1")
@RestController
public class Controller {
    private final PreferenceService preferenceService;

    Controller(PreferenceService preferenceService) {
        this.preferenceService = preferenceService;
    }

    @GetMapping("/match/find?strategy=strong")
    public ResponseEntity<HashMap<UserDto, Integer>> getStrongMatches(Long userId) {
        HashMap<UserEntity, Integer> input = preferenceService.getStronglyMatchingUsers(userId).get();
        HashMap<UserDto, Integer> output = new HashMap<>();
        input.forEach((entry, value) -> output.put(Transformer.transformUserEntityToDto(entry), value));

        return ResponseEntity.of(Optional.of(output));
    }

    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        return preferenceService.getAllUsers();
    }
}
