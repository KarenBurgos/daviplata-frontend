package com.hackaton.daviplata.repositories;

import com.hackaton.daviplata.models.entities.Service;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ServiceRepository extends JpaRepository<Service, UUID> {

}
