import { expect } from 'chai'
import { signUpUser } from '../../src/use_cases/sign_up_user';
import { signInUser } from '../../src/use_cases/sign_in_user';
import { User } from '../../src/entities/user';
import { UserRepo } from '../../src/infrastructure/persistence/in_memory/user_repo';

describe('User signin', () => {
    it('succesfully authenticate user when given valid username and password', () => {
        const username = 'valid-username';
        const password = 'valid-password';
        const userRepo = new UserRepo();
        signUpUser(username, password, userRepo);
        const user = signInUser(username, password, userRepo);
        console.log(user);
        expect(user.isAuthenticated).to.equal(true);
    })

    it('should fail to authenticate user when given invalid username or password', () => {
        const username = 'invalid-username';
        const password = 'invalid-password';
        const userRepo = new UserRepo();
        expect(() => signInUser(username, password, userRepo)).to.throw(Error);
    })

});


