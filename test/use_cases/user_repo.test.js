import { expect } from 'chai';
import { UserRepo } from '../../src/infrastructure/persistence/in_memory/user_repo';

describe('UserRepo', () => {
    it('adds user to storage and gets user by username', () => {
        const username = 'valid-username';
        const password = 'valid-password';
        const userRepo = new UserRepo();
        userRepo.addUser(username, password);
        const expectedUser = userRepo.getUserByUserName(username);

        expect(expectedUser).to.not.equal(null);
        expect(expectedUser.username).to.equal(username);
        expect(expectedUser.password).to.equal(password);
    });
});
