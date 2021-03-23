import { expect } from 'chai'

class User {
    static isAuthenicated(username, password, userRepo){
        const user = userRepo.getUserByUserName(username);
        console.log(user)
        if (user && user.username === username && user.password === password){
            return true;
        } else {
            return false;
        }

    }
}

class UserRepo {
    constructor(){
        this.users = {};
    }

    getUserByUserName = (username) => {
      return this.users[username];
    }

    addUser = (username, password) => {
        this.users[username] = {username: username, password: password};
        return true;
    }
}

function signUpUser(username, password, userRepo){
    return userRepo.addUser(username, password);
}


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

describe('User signup', () => {
    it('succesfully sign up user when given valid username and password', () => {
        const username = 'valid-username';
        const password = 'valid-password';
        const userRepo = new UserRepo();
        expect(signUpUser(username, password, userRepo)).to.equal(true);
    })

});

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
    })
});
