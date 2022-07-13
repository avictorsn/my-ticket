import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/model/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket = new Ticket();

  constructor() { }

  ngOnInit(): void {
  }

}
