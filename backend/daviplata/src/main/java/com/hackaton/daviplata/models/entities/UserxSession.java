package com.hackaton.daviplata.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name="USERXSESSION")
public class UserxSession {
    @Id
    @Column(name="id_userxsession")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idUserXSession;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_user", nullable = true)
    private Users user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_session", nullable = true)
    private Session session;

    public UserxSession(Users user, Session session) {
        super();
        this.user = user;
        this.session = session;
    }


}
