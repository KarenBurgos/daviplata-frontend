package com.hackaton.daviplata.repositories;

import com.hackaton.daviplata.models.entities.Session;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SessionRepository extends JpaRepository<Session, UUID> {
    Session findByCode(String code);
}
