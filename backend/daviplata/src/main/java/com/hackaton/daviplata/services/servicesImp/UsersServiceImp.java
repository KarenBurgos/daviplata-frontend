package com.hackaton.daviplata.services.servicesImp;

import com.hackaton.daviplata.models.entities.Token;
import com.hackaton.daviplata.models.entities.Users;
import com.hackaton.daviplata.services.UsersService;
import org.springframework.stereotype.Service;

@Service
public class UsersServiceImp implements UsersService {
    @Override
    public Token registerToken(Users user) throws Exception {
        return null;
    }

    @Override
    public Boolean isTokenValid(Users user, String token) {
        return null;
    }

    @Override
    public void cleanTokens(Users user) throws Exception {

    }

    @Override
    public Users getUserFromToken(String info) {
        return null;
    }

    @Override
    public Boolean comparePass(String toCompare, String current) {
        return null;
    }

    @Override
    public void toggleToken(Users user) {

    }

    @Override
    public Users findUserAuthenticated() {
        return null;
    }

    @Override
    public Users findOneByDui(String dui) {
        return null;
    }
}
