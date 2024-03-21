package com.thg.accelerator.flatfish.service;

import com.thg.accelerator.flatfish.config.AuthenticationResponse;
import com.thg.accelerator.flatfish.config.JwtService;
import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.entities.UserEntity;
import com.thg.accelerator.flatfish.repositories.UsersRepo;
import com.thg.accelerator.flatfish.transformer.Transformer;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UsersRepo usersRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(UserDto request) {
        UserEntity user = Transformer.transformUserDtoToEntity(request);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user = usersRepo.save(user);
        String token = jwtService.generateToken(user);

        return new AuthenticationResponse(token);
    }

    public AuthenticationResponse authenticate(UserDto request) {
        UserEntity user = Transformer.transformUserDtoToEntity(request);
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getUserId(),
                        user.getPassword()
                )
        );
        UserEntity requestedUser = usersRepo.findById(request.getUserId()).orElseThrow();
        String token = jwtService.generateToken(requestedUser);

        return new AuthenticationResponse(token);
    }
}
