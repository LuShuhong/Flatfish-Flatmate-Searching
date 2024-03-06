package com.thg.accelerator.flatfish.controllers;


import com.thg.accelerator.flatfish.service.PreferenceService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1")
@RestController
public class Controller {
    private final PreferenceService preferenceService;

    Controller(PreferenceService preferenceService) {
        this.preferenceService = preferenceService;
    }

//    @GetMapping("/match/find?strategy=strong")
//    public ResponseEntity<HashMap<UserDto, Integer>> getStrongMatches() {
//        TODO: xyz
//    }

}
