package com.thg.accelerator.flatfish.controllers;

import com.thg.accelerator.flatfish.config.AuthenticationResponse;
import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody UserDto userDto) {
        return ResponseEntity.ok(authenticationService.register(userDto));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody UserDto userDto) {
        return ResponseEntity.ok(authenticationService.authenticate(userDto));
    }
}
