import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Team} from '../Team';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {TeamModalComponent} from "../team-modal/team-modal.component";

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
        this.modalRef = this.modalService.show(TeamModalComponent);
    }

    showPlayoffTeamDetail(team: Team){
        console.log('This is the team: ', team);
    }
}
