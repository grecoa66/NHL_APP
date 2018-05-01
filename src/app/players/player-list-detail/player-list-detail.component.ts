import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Player} from '../player-objects/player';
import {PlayersService} from '../services/players.service';
import {Skater} from '../player-objects/skater';
import {Goalie} from '../player-objects/goalie';
import {SortableListComponent} from "../../utils/sortable-list";
import {ColumnOptions} from "../../utils/column-sort";

@Component({
    selector: 'app-player-list-detail',
    templateUrl: './player-list-detail.component.html',
    styleUrls: ['./player-list-detail.component.css']
})
export class PlayerListDetailComponent extends SortableListComponent implements OnInit, OnDestroy {
    @Input() players: any[];

    skaters: Skater[];
    goalies: Goalie[];

    goalieCollapsed: boolean = true;
    skatersCollapsed: boolean = true;

    constructor(private playerService: PlayersService) {
        super(new ColumnOptions(false, 'lastName', '', 1));
    }

    ngOnInit() {
        this.skaters = this.playerService.getSkaters();
        this.goalies = this.playerService.getGoalies();
    }

    ngOnDestroy() {
        this.playerService.destroyPlayersList();
    }

    collapsed(event: any): void {
        //console.log(event);
    }

    expanded(event: any): void {
        //console.log(event);
    }
}
