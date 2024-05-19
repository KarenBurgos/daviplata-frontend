package com.hackaton.daviplata.repositories;

import com.hackaton.daviplata.models.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<Users, UUID> {
    Users findOneByEmail(String email);
}
