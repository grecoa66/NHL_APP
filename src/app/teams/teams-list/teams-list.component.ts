import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Team} from '../Team';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {TeamModalComponent} from "../team-modal/team-modal.component";
import {ColumnOptions} from "../../utils/column-sort";
import {SortableListComponent} from "../../utils/sortable-list";

@Component({
    selector: 'app-teams-list',
    templateUrl: './teams-list.component.html',
    styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent  extends SortableListComponent implements OnInit{
    //Input Data
    @Input() teams : any[] = [];
    @Input() year : string;
    @Input() playoffs : boolean;

    private modalRef : BsModalRef;

    constructor(private modalService : BsModalService, public router: Router) {
        super(new ColumnOptions(false, 'rank', '', 1));
    }

    ngOnInit() {
    }

    // Navigate to the teams page
    showTeamDetail(team: Team, template: TemplateRef<any>){
        this.router.navigate([`/team/${this.year}/${this.playoffs}/${team.abbrv}`])
    }

    showPlayoffTeamDetail(team: Team){
        console.log('This is the team: ', team);
    }

}
