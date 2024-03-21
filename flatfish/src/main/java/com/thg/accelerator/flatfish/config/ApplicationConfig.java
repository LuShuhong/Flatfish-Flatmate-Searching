package com.thg.accelerator.flatfish.config;

import com.thg.accelerator.flatfish.repositories.UsersRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

    private final UsersRepo usersRepo;
    @Bean
    public UserDetailsService userDetailsService() {
        return username -> usersRepo.findById(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
