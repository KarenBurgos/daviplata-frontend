package com.hackaton.daviplata.repositories;

import com.hackaton.daviplata.models.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AccountRepository extends JpaRepository<Account, UUID>{
}
