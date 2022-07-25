import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
   
  /* Atributo booleano que indica se o card corrente é do tipo "Adição" ou "Edição"; */
  isNewTicket: boolean = false;

  constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  /* Atribui, ao montar o componente na DOM, o valor do booleano "isNewTicket"; */
  ngOnInit(): void {
    this.isNewTicket = this.data.ticket.title === undefined
  }

  /* Método que avalia se o card tem inputs válidos para serem submetidos; */
  invalid(): boolean {
    return !this.data.ticket.title || !this.data.ticket.description
  }

  /* Método que realiza a remoção do ticket atual na lista corrente; */
  delete(): void {
    this.data.delete = true;
    this.dialogRef.close(this.data);
  } 

}
