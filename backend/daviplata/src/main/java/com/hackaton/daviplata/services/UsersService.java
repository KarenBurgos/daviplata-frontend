package com.hackaton.daviplata.services;

import com.hackaton.daviplata.models.entities.Token;
import com.hackaton.daviplata.models.entities.Users;

public interface UsersService {

    //Token management
    Token registerToken(Users user) throws Exception;
    Boolean isTokenValid(Users user, String token);
    void cleanTokens(Users user) throws Exception;
    Users getUserFromToken (String info);
    Boolean comparePass(String toCompare, String current);
    void toggleToken(Users user);

    //Find User authenticated
    Users findUserAuthenticated();

    //Find User by dui
    Users findOneByDui(String dui);
}
