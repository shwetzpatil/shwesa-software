export function signUpUser(username, password, userRepo) {
    return userRepo.addUser(username, password);
}
