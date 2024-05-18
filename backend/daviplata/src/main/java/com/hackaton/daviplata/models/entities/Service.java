package com.hackaton.daviplata.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name="SERVICE")
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_service")
    private UUID idService;

    @Column(name="name")
    private String name;

    @Column(name="amount")
    private double amount;

    @Column(name="isBlocked")
    private boolean isBlocked;

    @Column(name="date_")
    private LocalDate date;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_category",nullable = true)
    private Category category;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_budget",nullable = true)
    private Budget budget;

    public Service(String name, double amount, boolean isBlocked, LocalDate date, Category category, Budget budget) {
        super();
        this.name = name;
        this.amount = amount;
        this.isBlocked = isBlocked;
        this.date = date;
        this.category = category;
        this.budget = budget;
    }

}
