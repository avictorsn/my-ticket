import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsMenuComponent } from './components/boards-menu/boards-menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BoardComponent } from './board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { TicketComponent } from './components/ticket/ticket.component';
import {DragDropModule} from '@angular/cdk/drag-drop'; 

@NgModule({
  declarations: [
    BoardComponent,
    BoardsMenuComponent,
    TicketComponent
  ],
  exports: [
    BoardComponent,
    BoardsMenuComponent  
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule
  ]
})
export class BoardModule { }
