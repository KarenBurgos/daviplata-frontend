package com.hackaton.daviplata.repositories;

import com.hackaton.daviplata.models.entities.Transfer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TransferRepository extends JpaRepository<Transfer, UUID> {

}
