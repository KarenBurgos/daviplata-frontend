package com.hackaton.daviplata.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name="SESSION")
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_session")
    private UUID idSession;

    @Column(name="code")
    private String code;

    @Column(name="total")
    private double total;

    @Column(name="status")
    private Boolean status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_user", nullable = true)
    private Users userHost;

    public Session(String code, double total, Boolean status, Users userHost) {
        super();
        this.code = code;
        this.total = total;
        this.status = true;
        this.userHost = userHost;
    }

}
