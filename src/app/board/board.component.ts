import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ticket } from 'src/model/ticket.model';
import { TicketService } from 'src/services/ticket.service';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  todo: Ticket[] = [];

  inProgress: Ticket[] = [];

  done: Ticket[] = [];

  constructor(private ticketService: TicketService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.todo = this.ticketService.getTodoList();
    this.inProgress = this.ticketService.getInProgressList();
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

  openModal($ticket?: Ticket, list?: Ticket[]): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { title: $ticket?.title, description: $ticket?.description} 
    });

    dialogRef.afterClosed().subscribe(result => {

      if(!$ticket && result) {
        result.id  = this.ticketService.autoGenerateId();
        this.todo.push(result);
      }
      if($ticket && result && list) {
        list[list.indexOf($ticket)] = result
      }
    });
  }

}
