package com.thg.accelerator.flatfish.dto;

import lombok.*;

@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@ToString
public class SavedProfileDto {
    private Long Id;
    private String savedProfileId;
    private String savingProfileId;
}
