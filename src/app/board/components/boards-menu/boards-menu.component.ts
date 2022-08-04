import { Component, OnInit } from '@angular/core';
import { IpcService } from 'src/app/ipc.service';

@Component({
  selector: 'app-boards-menu',
  templateUrl: './boards-menu.component.html',
  styleUrls: ['./boards-menu.component.scss']
})
export class BoardsMenuComponent implements OnInit {

  public clickCounter: number = 0;

  constructor(private ipcService: IpcService) {
  }

  ngOnInit(): void {
    this.ipcService._ipc?.on('already-clicked', (event, args)=> {
      this.clickCounter = args.clicks;
    })

    // Solicitar dados do JSON do click
    this.ipcService._ipc?.send('recover-counter');

    // Escutar dados recebidos do JSON e renderizar em tela
    this.ipcService._ipc?.on('get-counter', (event, args)=> {
      this.clickCounter = args.clicks;
    });

  }

  onClickMenu() {
    this.ipcService._ipc?.send('click-menu', {clicks: this.clickCounter})
  }

}
