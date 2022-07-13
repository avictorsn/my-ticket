import { Injectable } from '@angular/core';
import { Ticket } from 'src/model/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {



  constructor() { }


  // Função auxiliar para preenchimento da lista de tickets no status "TO DO"; 
  getTodoList(): Ticket[] {
    return [
      {title: 'Aula 1', description: 'Introdução ao Electron'},
      {title: 'Aula 2', description: 'Explicando a aplicação Angular'}
    ]
  }
  
  // Função auxiliar para preenchimento da lista de tickets no status "DONE"; 
  getDoneList(): Ticket[] {
    return []
  }
}
