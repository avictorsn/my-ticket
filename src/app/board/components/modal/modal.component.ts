import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from 'src/model/ticket.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
   
  isNewTicket: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Ticket) { }

  ngOnInit(): void {
    this.isNewTicket = this.data.title === undefined
  }

  invalid() {
    return !this.data.title || !this.data.description
  }

}
