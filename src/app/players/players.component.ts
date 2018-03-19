import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlayersService} from './services/players.service';
// import {PlayerFilter} from './player-objects/player-filter.enum';

enum PlayerFilter {
    Forwards = 'table-success',
    Defenseman = 'table-info',
    Goalies = 'table-primary',
    None = 'table-dark'
}

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnDestroy{

    //List of all players
    players: any[] = [];

    // Selected player
    selectedPlayer = {};
    playerSelected = false;

    // Player type toggles
    forwardsEnabled = false;
    defenseEnabled = false;
    goalieEnabled = false;
    playerFilter: string = PlayerFilter["None"];

    // Directive enablers
    selectedYear: number;
    playersLoaded = false;
    playoffsEnabled = false;

    constructor(private playerService: PlayersService) { }

    ngOnInit(){}

    ngOnDestroy(){
        // Ensure we don't cause bad data lists
        this.playerService.destroyPlayersList();
    }

    /**
     * Call the player service and put all the players info
     * into an array that is available to the template.
     */
    getAllPlayers(year) {
        // subscribe to service call
        this.playerService.getAllPlayers(year, this.playoffsEnabled)
            .subscribe(res => {
                // Pass result to the player builder service
                this.players = this.playerService.buildPlayerList(res);
                this.selectedYear = year;
                this.playersLoaded = true;
            });

    }

    // Set data and show the play popup
    selectPlayer(player){
        this.playerSelected = true;
        this.selectedPlayer = player;
        this.getPlayerInfo(player);
    }

    getPlayerInfo(player){
        console.log('This is the player I chose: ', player);
    }

    /**
     * Toggle only showing forwards
     */
    enableForwards(){
        this.forwardsEnabled = !this.forwardsEnabled;
        if(this.forwardsEnabled){
            this.players = this.playerService.getForwards();
            this.playerFilter = PlayerFilter["Forwards"];
            this.defenseEnabled = false;
            this.goalieEnabled = false;
        }else{
            this.players = this.playerService.getPlayers();
            this.playerFilter = PlayerFilter["None"];
        }
    }

    /**
     * Toggle only showing defenseman
     */
    enableDefenseman(){
        this.defenseEnabled = !this.defenseEnabled;
        if(this.defenseEnabled){
            this.players = this.playerService.getDefenseman();
            this.playerFilter = PlayerFilter["Defenseman"];
            this.forwardsEnabled = false;
            this.goalieEnabled = false;
        }else{
            this.players = this.playerService.getPlayers();
            this.playerFilter = PlayerFilter["None"];
        }
    }

    /**
     * Toggle only showing goalies
     */
    enableGoalies(){
        this.goalieEnabled = !this.goalieEnabled;
        if(this.goalieEnabled){
            this.players = this.playerService.getGoalies();
            this.playerFilter = PlayerFilter["Goalies"];
            this.forwardsEnabled = false;
            this.defenseEnabled = false;
        }else{
            this.players = this.playerService.getPlayers();
            this.playerFilter = PlayerFilter["None"];
        }
    }


}
