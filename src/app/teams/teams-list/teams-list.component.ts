import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Team} from "../team";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
    selector: 'app-teams-list',
    templateUrl: './teams-list.component.html',
    styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

    @Input() teams : any[] = [];
    @Input() year : string;
    @Input() playoffs : boolean;

    modalRef : BsModalRef;
    constructor(private modalService : BsModalService) {}

    ngOnInit() {
    }

    showTeamDetail(team: Team, template: TemplateRef<any>){
        console.log('This is the team: ', team);
    }

    showPlayoffTeamDetail(team: Team){
        console.log('This is the team: ', team);
    }
}
