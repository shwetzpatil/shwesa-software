export function UserSignInFailedException(message = "Unable to signin user") {
    this.message = message;
    this.code = "user_signin_failed";
}
  
UserSignInFailedException.prototype = Object.create(Error.prototype);

export function DuplicateUsernameException(message = "Username already exists") {
    this.message = message;
    this.code = "username_already_exists";
}
  
DuplicateUsernameException.prototype = Object.create(Error.prototype);

export function TicketCreationFailedException(message) {
    this.message = message;
    this.code = "ticket_creation_failed";
}
  
TicketCreationFailedException.prototype = Object.create(Error.prototype);
