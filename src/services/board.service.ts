import { Injectable } from '@angular/core';
import { BoardList } from 'src/model/board-list.model';
import { Ticket } from 'src/model/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public todo: BoardList = new BoardList('TODO');
  public inProgress: BoardList = new BoardList('IN PROGRESS');
  public done: BoardList = new BoardList('DONE');
  constructor() {

    /* Chamada temporária de método mockup para listas; */
    this.mockup();
  }

  // Função auxiliar para recuperar lista de tickets com o nome dado pelo parâmetro "name";
  async getList(boardList: BoardList, name: string): Promise<Ticket[]> {
    
    /* Código para recuperar lista em estrutura de persistência de dados; */
    return await boardList.list;
  }

  // Função que realiza a adição, na boardList dada como parâmetro, de um novo ticket "partialTicket";
  async push(boardList: BoardList, partialTicket: Omit<Ticket, 'id'>): Promise<any> {

    /* Código para atualizar lista em estrutura de persistência de dados; */
    return await boardList.pushTicket(partialTicket);
  }

  // Função que realiza a alteração, na boardList dada como parâmetro, de um ticket já existente "toUpdateTicket";
  async update(boardList: BoardList, toUpdateTicket: Ticket): Promise<any> {

    /* Código para atualizar lista em estrutura de persistência de dados; */
    return await boardList.updateTicket(toUpdateTicket);
  }

  // Função que realiza a remoção, na boardList dada como parâmetro, do ticket "toRemoveTicket";
  async remove(boardList: BoardList, toRemoveTicket: Ticket): Promise<any> {

    /* Código para atualizar lista em estrutura de persistência de dados; */
    return await boardList.removeTicket(toRemoveTicket);
  }

  // Função temporária para mockup de listas;
  mockup(): void {
    
    // TO DO;
    this.todo.pushTicket({title: 'Aula 1', description: 'Introdução ao Electron'});
    this.todo.pushTicket({title: 'Aula 2', description: 'Explicando a aplicação Angular'});
    // IN PROGRESS;
    
    // DONE;
  }


}
