import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Team} from '../Team';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
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
    constructor(private modalService : BsModalService, public router: Router) {}

    ngOnInit() {
    }

    showTeamDetail(team: Team, template: TemplateRef<any>){
        // console.log('This is the team: ', team);
        // const initialState = {
        //     team: team
        // };
        // this.modalRef = this.modalService.show(TeamModalComponent, {initialState});
        this.router.navigate([`/team/${this.year}/${this.playoffs}/${team.name}`])
    }

    showPlayoffTeamDetail(team: Team){
        console.log('This is the team: ', team);
    }
}
