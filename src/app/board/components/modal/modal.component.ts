import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from 'src/model/ticket.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: Ticket) { }

  ngOnInit(): void {
  }

}
