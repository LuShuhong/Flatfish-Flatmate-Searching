package com.thg.accelerator.flatfish.repositories;


import com.thg.accelerator.flatfish.entities.SavedProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavedProfileRepo extends JpaRepository<SavedProfileEntity, Long>{

}
