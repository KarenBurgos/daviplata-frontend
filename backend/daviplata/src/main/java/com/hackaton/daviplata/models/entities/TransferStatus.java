package com.hackaton.daviplata.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name="TRANSFER_STATUS")
public class TransferStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_status")
    private UUID idStatus;

    @Column(name="name")
    private String name;

    public TransferStatus(String name) {
        super();
        this.name = name;
    }
}
