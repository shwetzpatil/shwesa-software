import { expect } from 'chai'
import { signUpUser } from '../../src/use_cases/sign_up_user';
import { User } from '../../src/entities/user';
import { UserRepo } from '../../src/infrastructure/persistence/in_memory/user_repo';

describe('User signin', () => {
    it('succesfully authenticate user when given valid username and password', () => {
        const username = 'valid-username';
        const password = 'valid-password';
        const userRepo = new UserRepo();
        signUpUser(username, password, userRepo);
        expect(User.isAuthenicated(username, password, userRepo)).to.equal(true);
    })

    it('should fail to authenticate user when given invalid username or password', () => {
        const username = 'invalid-username';
        const password = 'invalid-password';
        const userRepo = new UserRepo();
        expect(User.isAuthenicated(username, password, userRepo)).to.equal(false);
    })

});


