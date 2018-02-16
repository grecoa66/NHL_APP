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
        let players = JSON.parse(res);

        for(let player in players) {
          if(players.hasOwnProperty(player))
            console.log(players[player]);
        }
        //console.log(res);
      });

  }

}
