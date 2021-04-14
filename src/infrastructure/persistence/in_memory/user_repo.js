import { DuplicateUsernameException } from "../../../entities/exceptions";
import { User } from "../../../entities/user";

export class UserRepo {
    constructor() {
        this.users = {};
    }

    getUserByUserName = (username) => {
        const user = this.users[username];
        const password = user && user.password;
        return new User(username, password);
    };

    addUser = (username, password) => {
        if (this.users[username]){
            throw new DuplicateUsernameException();
        } else {
        this.users[username] = { username: username, password: password };
        return true;
        }
    };
}
