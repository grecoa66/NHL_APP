import {Component, OnInit} from '@angular/core';
import {PlayersService} from "./services/players.service";
import * as _ from 'lodash';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit{

    //List of all players
    players: any[] = [];
    teamStyle = 'ARI';

    // Selected player
    selectedPlayer = {};
    playerSelected = false;

    constructor(private playerService: PlayersService) { }

    ngOnInit(){ this.getAllPlayers(); }

    /**
     * Call the player service and put all the players info
     * into an array that is available to the template.
     */
    getAllPlayers() {
        // subscribe to service call
        this.playerService.getAllPlayers()
            .subscribe(res => {
                // Pass result to the player builder service
                this.players = this.playerService.playerBuilder(res);
            });
    }

    selectPlayer(player){
        this.playerSelected = true;
        this.selectedPlayer = player;
        this.getPlayerInfo(player);
    }

    getPlayerInfo(player){
        console.log('This is the player I chose: ', player);
    }

}
