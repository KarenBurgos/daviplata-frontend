package com.hackaton.daviplata.repositories;

import com.hackaton.daviplata.models.entities.Budget;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BudgetRepository extends JpaRepository<Budget, UUID> {
}
