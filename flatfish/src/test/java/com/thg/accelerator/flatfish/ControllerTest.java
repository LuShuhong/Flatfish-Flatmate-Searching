package com.thg.accelerator.flatfish;
import com.thg.accelerator.flatfish.controllers.Controller;
import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.service.PreferenceService;
import com.thg.accelerator.flatfish.service.UserService;
import com.thg.accelerator.flatfish.transformer.Transformer;
import com.thg.accelerator.flatfish.transformer.TransformerPreference;
import org.apache.catalina.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class ControllerTest {

    Controller controller;
    UserService mockUserService;
    PreferenceService mockPreferenceService;
    Transformer transformer;
    TransformerPreference transformerPreference;


    @BeforeEach
    public void setup() {
        this.mockUserService = mock(UserService.class);
        this.controller = new Controller(mockUserService, mockPreferenceService, transformer);
    }

    @Test
    public void testsCanPass() {
    }

    @Disabled
    @Test
    public void testsCanFail() {
        fail();
    }

    @Test
    public void testGetMatchingProfilesReturnsMatches() {
        // TODO: update when service is updated
    }

    @Test
    public void testGetAllUsersCallsUserService() {
        controller.getAllUsers();

        verify(mockUserService).getAllUsers();
    }

    @Test
    public void testGetAllPreferencesCallsUserService() {
        controller.getAllPreferences();

        verify(mockPreferenceService).getAllPreferences();
    }

}
