import { User } from "../entities/user";
import { Ticket } from "../entities/ticket";

export function createTicket(ticketTitle, creator) {
    if (!ticketTitle) {
        throw new Error('Unauthenticated user can not create ticket');
    }

    if (!(creator instanceof User && creator.isAuthenticated === true)) {
        throw new Error('Unauthenticated user can not create ticket');
    }

    var ticket = new Ticket(ticketTitle, creator);
    return ticket;

}
