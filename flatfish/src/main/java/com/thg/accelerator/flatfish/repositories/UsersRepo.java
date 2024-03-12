package com.thg.accelerator.flatfish.repositories;

import com.thg.accelerator.flatfish.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepo extends JpaRepository<UserEntity, String> {

}
