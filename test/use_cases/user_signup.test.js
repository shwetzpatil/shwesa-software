import { expect } from 'chai';
import { signUpUser } from '../../src/use_cases/sign_up_user';
import { UserRepo } from '../../src/infrastructure/persistence/in_memory/user_repo';

describe('User signup', () => {
    it('succesfully sign up user when given valid username and password', () => {
        const username = 'valid-username';
        const password = 'valid-password';
        const userRepo = new UserRepo();
        expect(signUpUser(username, password, userRepo)).to.equal(true);
    });

});
