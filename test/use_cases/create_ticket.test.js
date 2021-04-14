import { expect } from "chai";
import { TicketCreationFailedException } from "../../src/entities/exceptions";
import { User } from "../../src/entities/user";
import { createTicket } from "../../src/use_cases/create_ticket";

describe('Create a ticket', () => {

    it('does not allow unauthenticated user to create a ticket', () => {
        var userObj = new User("ticket-creator-name", "ticket-creator-password");
        expect(() => createTicket("ticket-title", userObj)).to.throw(TicketCreationFailedException, "Unauthenticated user cannot create ticket");
    });

    it('does not allow to create a ticket with empty title', () => {
        var userObj = new User("ticket-creator-name", "ticket-creator-password");
        expect(() => createTicket("", userObj)).to.throw(TicketCreationFailedException, "Ticket title cannot be empty");
        expect(() => createTicket(undefined, userObj)).to.throw(TicketCreationFailedException, "Ticket title cannot be empty");
        expect(() => createTicket(null, userObj)).to.throw(TicketCreationFailedException, "Ticket title cannot be empty");
    });

    it('allows authenticated user to create a ticket', () => {
        var reporter = new User("ticket-creator-name", "ticket-creator-password");
        reporter.isAuthenticated = true;
        console.log(reporter)
        var ticket = createTicket("New Ticket", reporter);
        expect(ticket.title).to.equal("New Ticket");
        expect(ticket.creator.username).to.equal(reporter.username);
    });

});
