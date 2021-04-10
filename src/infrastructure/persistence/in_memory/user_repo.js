import { User } from "../../../entities/user";

export class UserRepo {
    constructor() {
        this.users = {};
    }

    getUserByUserName = (username) => {
        const user = this.users[username];
        const password = user.password;
        return new User(username, password);
    };

    addUser = (username, password) => {
        if (this.users[username]){
            throw new Error('Username already exists');
        } else {
        this.users[username] = { username: username, password: password };
        return true;
        }
    };
}
