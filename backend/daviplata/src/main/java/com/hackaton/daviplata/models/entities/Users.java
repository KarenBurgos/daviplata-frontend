package com.hackaton.daviplata.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name="USERS")
@ToString(exclude = "tokens")
public class Users implements UserDetails {

    private static final long serialVersionUID = 1460435087476558985L;

    @Id
    @Column(name="id_user")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID idUser;

    @Column(name="dui")
    private String dui;

    @Column(name="name")
    private String name;

    @Column(name="lastname")
    private String lastname;

    @Column(name="email")
    private String email;

    @Column(name="phone")
    private String phone;

    @JsonIgnore
    @Column(name="password")
    private String password;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Account> accounts;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Budget> budget;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Token> tokens;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Session> sessions;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<UserxSession> userxSessions;

    @OneToMany(mappedBy = "user_transmitter", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Transfer> transfersTransmitter;

    @OneToMany(mappedBy = "user_receiver", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Transfer> transfersReceiver;


    public Users(String dui, String name, String lastname, String email, String phone, String password) {
        super();
        this.dui = dui;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
