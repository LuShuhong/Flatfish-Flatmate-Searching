package com.thg.accelerator.flatfish.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@ToString
public class PreferenceDto {
    private String userId;
    private double budgetMin;
    private double budgetMax;
    private double ageMin;
    private double ageMax;
    private Gender gender;
    private boolean smoker;
    private List<Long> preferredAreaIds;
}
