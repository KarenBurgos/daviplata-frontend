package com.hackaton.daviplata.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name="TRANSFER")
public class Transfer {
    @Id
    @Column(name="id_transfer")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID idTransfer;

    @Column(name="amount")
    private BigDecimal amount;

    @Column(name = "date_transfer", insertable = false, updatable = false)
    private Date timestamp;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_status", nullable = true)
    private TransferStatus status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_user_transmitter", nullable = true)
    private Users userTransmitter;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_user_receiver", nullable = true)
    private Users userReceiver;

    public Transfer(BigDecimal amount, TransferStatus status, Users userTransmitter, Users userReceiver) {
        super();
        this.amount = amount;
        this.status = status;
        this.userTransmitter = userTransmitter;
        this.userReceiver = userReceiver;
    }
}
