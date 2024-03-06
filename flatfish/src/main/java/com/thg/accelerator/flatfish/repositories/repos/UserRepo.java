package com.thg.accelerator.flatfish.repositories.repos;

import com.thg.accelerator.flatfish.repositories.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Long> {
}
