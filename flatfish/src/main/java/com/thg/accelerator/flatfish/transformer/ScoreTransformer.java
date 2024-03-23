package com.thg.accelerator.flatfish.transformer;

import com.thg.accelerator.flatfish.dto.ScoreDto;
import com.thg.accelerator.flatfish.entities.UserEntity;

public class ScoreTransformer {

    public static ScoreDto transformScoreToDto(UserEntity userEntity, Double score) {
        return new ScoreDto(
                userEntity.getUserId(),
                userEntity.getName(),
                userEntity.getPassword(),
                userEntity.getBirthday(),
                userEntity.getAge(),
                userEntity.getDescription(),
                userEntity.getUserGender(),
                userEntity.getInstagram(),
                userEntity.getPicture(),
                userEntity.getBudgetMin(),
                userEntity.getBudgetMax(),
                userEntity.getAgeMin(),
                userEntity.getAgeMax(),
                userEntity.getGender(),
                userEntity.getLocation1(),
                userEntity.getLocation2(),
                userEntity.getLocation3(),
                userEntity.getRole(),
                score
        );
    }

    /*
    * NOTE: there's no reverse method because the controller will never need to receive a ScoreDto
    * */
}
