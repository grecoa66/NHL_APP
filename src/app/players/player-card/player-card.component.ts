import { Component, OnInit, Input } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

    player: any;

  constructor(public playerModal: BsModalRef) { }

  ngOnInit() {
      console.log(this.player);
  }

}
