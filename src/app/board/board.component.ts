import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardList } from 'src/model/board-list.model';
import { Ticket } from 'src/model/ticket.model';
import { BoardService } from 'src/services/board.service';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(public boardService: BoardService, public dialog: MatDialog, private snackbar: MatSnackBar) { }

  ngOnInit(): void {}

  /* Método que implementa funcionalidade de drag and drop do Angular Material; */
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

  /* Método para preparar a exibição de modal para criação/edição de um ticket; */
  openModal($ticket?: Ticket, list?: BoardList): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { 
        ticket: {
          title: $ticket?.title, description: $ticket?.description 
        } 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.evalTicket(result, $ticket, list);
    });
  }

  /* Método para avaliar a operação de ticket a partir dos valores de saída no modal; */
  evalTicket(result: any, $ticket?: Ticket, list?: BoardList) {
    if(result.delete && list && $ticket) {
      this.boardService.remove(list, ($ticket)).then((_ticket)=> {
        this.openFeedbackSnackBar('Ticket deletado com sucesso!');
      }).catch((err)=> {
          // Avaliar mensagem de erro a partir do código de erro retornado da execução da operação;
          this.openFeedbackSnackBar('Houve um problema ao realizar a operação. Tente novamente.');
      })
    } else {
      if(!$ticket && result.ticket) {
        this.boardService.push(this.boardService.todo, (result.ticket)).then((_ticket)=> {
          this.openFeedbackSnackBar('Ticket adicionado com sucesso!');
        }).catch((err)=> {
          // Avaliar mensagem de erro a partir do código de erro retornado da execução da operação;
          this.openFeedbackSnackBar('Houve um problema ao realizar a operação. Tente novamente.');
        })
      }
      if($ticket && result.ticket && list) {
        this.boardService.update(list, {id: $ticket.id, ...result.ticket}).then((_ticket)=> {
          this.openFeedbackSnackBar('Ticket alterado com sucesso!');
        }).catch((err)=> {
          // Avaliar mensagem de erro a partir do código de erro retornado da execução da operação;
          this.openFeedbackSnackBar('Houve um problema ao realizar a operação. Tente novamente.');
        })
      }
    }
  }

  /* Método auxiliar que devolve feedback visual através de Snackbar; */
  openFeedbackSnackBar(message: string) {
    this.snackbar.open(message, 'OK', {duration: 4000});
  }

}
