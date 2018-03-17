import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../player-objects/player';
import {PlayersService} from '../services/players.service';
import {Skater} from '../player-objects/skater';
import {Goalie} from '../player-objects/goalie';

@Component({
    selector: 'app-player-list-detail',
    templateUrl: './player-list-detail.component.html',
    styleUrls: ['./player-list-detail.component.css']
})
export class PlayerListDetailComponent implements OnInit {
    @Input() players: any[];

    skaters: Skater[];
    goalies: Goalie[];

    constructor(private playerService: PlayersService) {
    }

    ngOnInit() {
        this.skaters = this.playerService.getSkaters();
        this.goalies = this.playerService.getGoalies();
    }

}
