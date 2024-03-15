package com.thg.accelerator.flatfish.controllers;


import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.service.UserService;
import com.thg.accelerator.flatfish.transformer.Transformer;
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

    Controller(UserService userService) {
        this.userService = userService;
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

    /*
    * Please! Do NOT make this method return a PreferenceEntity!
    * */
    @GetMapping("/preferences")
    public ResponseEntity<List<UserDto>> getUserPreferences() {
        return userService
                .getAllUsers()
                .map(user -> user.stream()
                        .map(Transformer::transformUserEntityToDto)
                        .collect(Collectors.toList()))
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
}