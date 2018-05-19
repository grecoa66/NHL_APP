import { Component, OnInit } from '@angular/core';
import {GamelogsService} from "./services/gamelogs.service";

@Component({
  selector: 'app-gamelogs',
  templateUrl: './gamelogs.component.html',
  styleUrls: ['./gamelogs.component.css']
})
export class GamelogsComponent implements OnInit {

  constructor(private gamelogsService: GamelogsService) { }

  ngOnInit() {
    this.gamelogsService.getGamelogsForDate('2016-2017', '20161022')
        .subscribe(res => {
            console.log('[gameLogs] success: ', this.gamelogsService.buildGamelogList(res));

        }, err => {
           console.log('[gamelogs] error: ', err);
        });
  }


}
