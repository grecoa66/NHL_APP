import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
    selector: 'app-team-modal',
    templateUrl: './team-modal.component.html',
    styleUrls: ['./team-modal.component.css']
})
export class TeamModalComponent implements OnInit {
    list = ['Hey', 'Hi', 'Hello'];

    constructor(public bsModalRef: BsModalRef) {
    }

    ngOnInit() {
    }

}
