import { expect } from "chai";
import { User } from "../../src/entities/user";

class Ticket {
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
    }
}

function createTicket(ticketTitle, creator) {
    if (!ticketTitle) {
        throw new Error('Unauthenticated user can not create ticket');
    }

    if (!(creator instanceof User && creator.isAuthenticated === true)) {
        throw new Error('Unauthenticated user can not create ticket');
    }

    var ticket = new Ticket(ticketTitle, creator);
    return ticket;
    
}

describe('Create a ticket', () => {

    it('does not allow unauthenticated user to create a ticket', () => {
        expect(() => createTicket("ticket-title", userObj)).to.throw(Error);
    });

    it('does not allow to create a ticket with empty title', () => {
        expect(() => createTicket("", userObj)).to.throw(Error);
        expect(() => createTicket(undefined, userObj)).to.throw(Error);
        expect(() => createTicket(null, userObj)).to.throw(Error);
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
