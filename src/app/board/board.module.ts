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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { ModalComponent } from './components/modal/modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoardComponent,
    BoardsMenuComponent,
    TicketComponent,
    ModalComponent
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
    DragDropModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class BoardModule { }
