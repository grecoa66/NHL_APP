import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../player-objects/player";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {PlayerCardComponent} from "../player-card/player-card.component";
import {ColumnOptions} from "../../utils/column-sort";
import {SortableListComponent} from "../../utils/sortable-list";
// import {PlayerFilter} from "../player-objects/player-filter.enum";

@Component({
    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent extends SortableListComponent implements OnInit {

    @Input() players: any[];

    private playerCardRef: BsModalRef;

    constructor(private modalService: BsModalService) {
        super(new ColumnOptions(false, 'lastName', '', 1));
    }

    ngOnInit() {    }

    selectPlayer(selectedPlayer) {
        const propsObj = {
            'initialState' : {
                'player': selectedPlayer
            },
            'class': 'modal-lg card-modal'
        };
        this.playerCardRef = this.modalService.show(PlayerCardComponent, propsObj);
    }

}
