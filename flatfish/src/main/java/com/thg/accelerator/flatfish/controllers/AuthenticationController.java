package com.thg.accelerator.flatfish.controllers;

import com.thg.accelerator.flatfish.config.AuthenticationResponse;
import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins="//https://flatfish-frontend.pq46c.icekube.ics.cloud")
//https://flatfish-frontend.pq46c.icekube.ics.cloud
//http://localhost:3000
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody UserDto request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody UserDto request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
}
