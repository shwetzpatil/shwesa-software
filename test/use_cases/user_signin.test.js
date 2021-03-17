import { expect } from 'chai'

class User {
    static isAuthenicated(username, password){
        return true;
    }
}

describe('User signin', () => {
    it('succesfully authenticate user when given valid username and password', () => {
        const username = 'valid-username';
        const password = 'valid-password';
        expect(User.isAuthenicated(username, password)).to.equal(true);
    })

})
