import { UserSignInFailedException } from "../entities/exceptions";

export function signInUser(username, password, userRepo) {
    const user = userRepo.getUserByUserName(username);
    console.log(user);
    if (user && user.username === username && user.password === password) {
        user.isAuthenticated = true;
        return user;
    } 
    throw new UserSignInFailedException();
}
