import { expect } from 'chai';
import { User } from '../../src/entities/user';
import { UserRepo } from '../../src/infrastructure/persistence/in_memory/user_repo';

describe('UserRepo', () => {
    it('adds user to storage and gets user by username', () => {
        const username = 'valid-username';
        const password = 'valid-password';
        const userRepo = new UserRepo();
        userRepo.addUser(username, password);
        const expectedUser = userRepo.getUserByUserName(username);

        console.log(expectedUser)
        expect(expectedUser instanceof User).to.equal(true);
        expect(expectedUser).to.not.equal(null);
        expect(expectedUser.username).to.equal(username);
        expect(expectedUser.password).to.equal(password);
    });

    it('will throw error when we try to add the same username multiple times', () => {
        const username = 'valid-username';
        const password = 'valid-password';
        const password2 = 'valid-password2';
        const userRepo = new UserRepo();
        userRepo.addUser(username, password);
        expect(() => userRepo.addUser(username, password)).to.throw(Error);
        
    });
});
