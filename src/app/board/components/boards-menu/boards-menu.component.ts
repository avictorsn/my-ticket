import { Component, OnInit } from '@angular/core';
import { IpcService } from 'src/app/ipc.service';

@Component({
  selector: 'app-boards-menu',
  templateUrl: './boards-menu.component.html',
  styleUrls: ['./boards-menu.component.scss']
})
export class BoardsMenuComponent implements OnInit {

  constructor(private ipcRenderer: IpcService) { }

  ngOnInit(): void {
  }

  onClickMenu() {
    this.ipcRenderer._ipc?.send('click-menu')
  }

}
