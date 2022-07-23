import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from 'src/model/ticket.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
   
  isNewTicket: boolean = false;

  constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.isNewTicket = this.data.ticket.title === undefined
  }

  invalid(): boolean {
    return !this.data.ticket.title || !this.data.ticket.description
  }

  delete(): void {
    this.data.delete = true;
    this.dialogRef.close(this.data);
  } 

}
