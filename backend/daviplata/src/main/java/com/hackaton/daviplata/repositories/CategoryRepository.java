package com.hackaton.daviplata.repositories;

import com.hackaton.daviplata.models.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CategoryRepository extends JpaRepository<Category, UUID>{
    Category findByName(String name);
}
