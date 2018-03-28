import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../player-objects/player";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {PlayerCardComponent} from "../player-card/player-card.component";
// import {PlayerFilter} from "../player-objects/player-filter.enum";

@Component({
    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

    @Input() players: any[];
    @Input() teamStyle: string;
    @Input() filter: string;

    private playerCardRef: BsModalRef;

    constructor(private modalService: BsModalService) {
    }

    ngOnInit() {
        console.log('This is now created');
    }

    selectPlayer(selectedPlayer) {
        const propsObj = {
            'initialState' : {
                'player': selectedPlayer
            },
            'class': 'modal-lg card-modal'
        };
        const initialState = {
            'player': selectedPlayer
        };
        this.playerCardRef = this.modalService.show(PlayerCardComponent, propsObj);
    }

}
