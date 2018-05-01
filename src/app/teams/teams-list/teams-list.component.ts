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

    isDesc: boolean = false;
    column: string = '';
    lastColumn : string = '';
    direction: number = 1;

    modalRef : BsModalRef;
    constructor(private modalService : BsModalService, public router: Router) {}

    ngOnInit() {
    }

    // Navigate to the teams page
    showTeamDetail(team: Team, template: TemplateRef<any>){
        this.router.navigate([`/team/${this.year}/${this.playoffs}/${team.abbrv}`])
    }

    showPlayoffTeamDetail(team: Team){
        console.log('This is the team: ', team);
    }

    sortTable(column){
        this.lastColumn = this.column;
        this.column = column;
        this.isDesc = (this.lastColumn !== this.column) ? true : !this.isDesc;
        this.direction = this.isDesc ? 1: -1;
    }
}
