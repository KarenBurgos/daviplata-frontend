package com.hackaton.daviplata.repositories;

import com.hackaton.daviplata.models.entities.TransferStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TransferStatusRepository extends JpaRepository<TransferStatus, UUID> {

}
