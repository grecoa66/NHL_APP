import {Component, Input, OnInit} from '@angular/core';
import {Gamelog} from "../gamelog-objects/gamelog";

@Component({
    selector: 'app-gamelog-list',
    templateUrl: './gamelog-list.component.html',
    styleUrls: ['./gamelog-list.component.css']
})
export class GamelogListComponent implements OnInit {

    @Input() games: any[] = [];

    constructor() {
    }

    ngOnInit() {

        console.log('[In Gamelog List] : ', this.games);
    }

}
