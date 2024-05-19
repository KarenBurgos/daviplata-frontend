package com.hackaton.daviplata.repositories;

import com.hackaton.daviplata.models.entities.Token;
import com.hackaton.daviplata.models.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface TokenRepository extends JpaRepository<Token, UUID> {
    List<Token> findByUserAndActive(Users user, Boolean active);
}
