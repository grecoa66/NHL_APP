import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../player-objects/player";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

    @Input() players : any[];
    @Input() teamStyle : string;

  constructor() { }

  ngOnInit() {
      console.log('This is now created');
  }

}
