import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {Team} from "../team";

@Component({
    selector: 'app-team-modal',
    templateUrl: './team-modal.component.html',
    styleUrls: ['./team-modal.component.css']
})
export class TeamModalComponent implements OnInit {

    team : Team;


    constructor(public bsModalRef: BsModalRef) {
    }

    ngOnInit() {}

    getGoalDiff(){
        return (this.team.goalDifferential > 0);
    }

}
