import { Ticket } from "./ticket.model";

export class BoardList {

    list: Ticket[] = [];

    constructor (public name: string) {}
    
    // Método para gerar id automaticamente;
    autoGenerateId(): string {
        return Math.random().toString(20).substring(2) 
    }

    // Método para adicionar Ticket na lista;
    async pushTicket(newTicket: Omit<Ticket, 'id'>): Promise<any> {
        let _newTicket = {id: this.autoGenerateId(), ...newTicket};
        try {
            this.list.push(_newTicket);
            return await _newTicket;
        } catch (error) {
            return await error;
            
        }
    }

    // Método para atualizar Ticket na lista;
    async updateTicket(toUpdateTicket: Ticket): Promise<any> {
        try {
            this.list = this.list.map((ticket)=> ticket.id === toUpdateTicket.id ? toUpdateTicket : ticket )
            return await toUpdateTicket;
        } catch (error) {
            return await error;
        }
    }

    // Método para remover Ticket na lista;
    async removeTicket(toRemoveTicket: Ticket): Promise<any> {
        try {
            this.list.splice(this.list.indexOf(toRemoveTicket), 1);
            return await toRemoveTicket;
        } catch (error) {
            return await error;
        }
        
    }
}