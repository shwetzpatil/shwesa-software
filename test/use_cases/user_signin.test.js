import { expect } from 'chai'

class User {
    static isAuthenicated(username, password){
        return true;
    }
}

function signUpUser(username, password, userRepo){
    userRepo[username] = password;
    console.log(userRepo)
    return userRepo;
}


describe('User signin', () => {
    it('succesfully authenticate user when given valid username and password', () => {
        const username = 'valid-username';
        const password = 'valid-password';
        expect(User.isAuthenicated(username, password)).to.equal(true);
    })

});

describe('User signup', () => {
    it('succesfully sign up user when given valid username and password', () => {
        const username = 'valid-username';
        const password = 'valid-password';
        expect(signUpUser(username, password, {})).to.eql({[`${username}`]: `${password}`});
    })

});
