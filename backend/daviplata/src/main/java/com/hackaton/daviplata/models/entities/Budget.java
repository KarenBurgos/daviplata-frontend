package com.hackaton.daviplata.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name="BUDGET")
public class Budget {
    @Id
    @Column(name="id_budget")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID idBudget;

    @Column(name="total_budget")
    private BigDecimal totalBudget;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user", nullable = false)
    private Users user;

    public Budget(BigDecimal totalBudget, Users user) {
        super();
        this.totalBudget = totalBudget;
        this.user = user;
    }
}
