import { Component, OnInit } from '@angular/core';
import {PlayersService} from "./services/players.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {

  players : any[];

  constructor(private playerService : PlayersService) { }

  getAllPlayers(){
    this.playerService.getAllPlayers()
      .subscribe(res => {
        console.log(res);
      })


  }

}
