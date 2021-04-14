import { User } from "../entities/user";
import { Ticket } from "../entities/ticket";
import { TicketCreationFailedException } from "../entities/exceptions";

export function createTicket(ticketTitle, creator) {
    if (!ticketTitle) {
        throw new TicketCreationFailedException('Ticket title cannot be empty');
    }

    if (!(creator instanceof User && creator.isAuthenticated === true)) {
        throw new TicketCreationFailedException('Unauthenticated user cannot create ticket');
    }

    var ticket = new Ticket(ticketTitle, creator);
    return ticket;

}
