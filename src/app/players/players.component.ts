import {Component, OnInit} from '@angular/core';
import {PlayersService} from "./services/players.service";

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent {

    players: any[] = [];

    constructor(private playerService: PlayersService) {
    }


    /**
     * Call the player service and put all the players info
     * into an array that is available to the template.
     */
    getAllPlayers() {

        this.playerService.getAllPlayers()
            .subscribe(res => {
                let playerData = res;
                console.log('Res inside the componen: ', res);

                _.forEach(playerData, (player) => {
                    this.players.push(playerData[player].player);
                });

            });
    }

}
