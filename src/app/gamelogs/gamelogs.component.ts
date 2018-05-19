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

  }


}
