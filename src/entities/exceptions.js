export function UserSignInFailedException(message = "Unable to signin user") {
    this.error = new Error(message);
    this.error.code = "user_signin_failed";
}
  
UserSignInFailedException.prototype = Object.create(Error.prototype);
