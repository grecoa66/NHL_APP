import {Component, OnInit} from '@angular/core';
import {PlayersService} from "./services/players.service";
import * as _ from 'lodash';
import {Player} from "./player-objects/player";

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit{

    //List of all players
    players: any[] = [];
    teamStyle = '';

    // Selected player
    selectedPlayer = {};
    playerSelected = false;

    // Player type toggles
    forwardsEnabled = false;
    defenseEnabled = false;
    goalieEnabled = false;

    playersLoaded = false;
    playoffsEnabled = false;

    constructor(private playerService: PlayersService) { }

    ngOnInit(){}

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
                this.playersLoaded = true;
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

    /**
     * Toggle only showing forwards
     */
    enableForwards(){
        this.forwardsEnabled = !this.forwardsEnabled;
        if(this.forwardsEnabled){
            this.players = this.playerService.getForwards();
            this.defenseEnabled = false;
            this.goalieEnabled = false;
        }else{
            this.players = this.playerService.getPlayers();
        }
    }

    /**
     * Toggle only showing defenseman
     */
    enableDefenseman(){
        this.defenseEnabled = !this.defenseEnabled;
        if(this.defenseEnabled){
            this.players = this.playerService.getDefenseman();
            this.forwardsEnabled = false;
            this.goalieEnabled = false;
        }else{
            this.players = this.playerService.getPlayers();
        }
    }

    /**
     * Toggle only showing goalies
     */
    enableGoalies(){
        this.goalieEnabled = !this.goalieEnabled;
        if(this.goalieEnabled){
            this.players = this.playerService.getGoalies();
            this.forwardsEnabled = false;
            this.defenseEnabled = false;
        }else{
            this.players = this.playerService.getPlayers();
        }
    }


}
