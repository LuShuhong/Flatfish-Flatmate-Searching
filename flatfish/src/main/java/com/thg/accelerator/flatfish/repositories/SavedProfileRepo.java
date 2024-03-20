package com.thg.accelerator.flatfish.repositories;


import com.thg.accelerator.flatfish.entities.SavedProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Repository

public interface SavedProfileRepo extends JpaRepository<SavedProfileEntity, Long>{
//    @Query("SELECT DISTINCT sp.savedUser.userId FROM SavedProfileEntity sp WHERE sp.savingUser.userId = :userId")
    List<SavedProfileEntity> findBySavingUserUserId(String userId);

}
