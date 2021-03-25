export function signInUser(username, password, userRepo) {
    const user = userRepo.getUserByUserName(username);
    console.log(user);
    if (user && user.username === username && user.password === password) {
        return true;
    } else {
        return false;
    }

}
