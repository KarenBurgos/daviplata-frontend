package com.hackaton.daviplata.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name = "ACCOUNT")
public class Account {

    @Id
    @Column(name = "id_account")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID idAccount;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "money")
    private BigDecimal money;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user", nullable = false)
    private Users user;

    public Account(String accountNumber, BigDecimal money, Users user) {
        super();
        this.accountNumber = accountNumber;
        this.money = money;
        this.user = user;
    }

}
