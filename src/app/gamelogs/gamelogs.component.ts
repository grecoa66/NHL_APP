import { Component, OnInit } from '@angular/core';
import {GamelogsService} from "./services/gamelogs.service";
import {Gamelog} from "./gamelog-objects/gamelog";

@Component({
  selector: 'app-gamelogs',
  templateUrl: './gamelogs.component.html',
  styleUrls: ['./gamelogs.component.css']
})
export class GamelogsComponent implements OnInit {

  constructor(private gamelogsService: GamelogsService) { }

  dateSelected: string;
  dateValid: boolean;
  games: any[];

  ngOnInit() {
    this.gamelogsService.getGamelogsForDate('2016-2017', '20161022')
        .subscribe(res => {
            this.dateValid = true;
            this.dateSelected = '10/22/2016';
            this.games = this.gamelogsService.buildGamelogList(res);
            console.log('[gameLogs] success: ', this.games);

        }, err => {
            this.dateValid = false;
           console.log('[gamelogs] error: ', err);
        });
  }


}
