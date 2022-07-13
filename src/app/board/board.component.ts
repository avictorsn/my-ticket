import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/model/ticket.model';
import { TicketService } from 'src/services/ticket.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  todo: Ticket[] = [];

  done: Ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.todo = this.ticketService.getTodoList();
    this.done = this.ticketService.getDoneList();
  }

  drop(event: CdkDragDrop<Ticket[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
