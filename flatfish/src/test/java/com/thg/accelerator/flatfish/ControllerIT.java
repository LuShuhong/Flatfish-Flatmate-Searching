package com.thg.accelerator.flatfish;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thg.accelerator.flatfish.controllers.Controller;
import com.thg.accelerator.flatfish.dto.UserDto;
import com.thg.accelerator.flatfish.service.UserService;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Disabled
@WebMvcTest(Controller.class)
public class ControllerIT {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;


    @Test
    public void testsCanPass() {
    }

    @Disabled
    @Test
    public void testsCanFail() {
        fail();
    }

    @Test
    public void testAddUserCallsUserServiceOnInput() throws Exception {
        UserDto userDto = mock();

        // Convert userDto to JSON
        String userDtoJson = new ObjectMapper().writeValueAsString(userDto);

        mockMvc.perform(post("/users").contentType(MediaType.APPLICATION_JSON)
                        .content(userDtoJson))
                .andExpect(status().isCreated());

        verify(userService).addUser(Mockito.any());
    }

}
