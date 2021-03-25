export class UserRepo {
    constructor() {
        this.users = {};
    }

    getUserByUserName = (username) => {
        return this.users[username];
    };

    addUser = (username, password) => {
        this.users[username] = { username: username, password: password };
        return true;
    };
}
