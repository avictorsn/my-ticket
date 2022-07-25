import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/model/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /* Atributo "ticket" recebido e definido como propriedade de Input pelo componente pai; */
  @Input() ticket: Ticket = new Ticket();

  constructor() { }

  ngOnInit(): void {
  }

}
