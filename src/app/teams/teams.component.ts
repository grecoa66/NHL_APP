import {Component, OnInit} from '@angular/core';
import {TeamsService} from "./services/teams.service";

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    constructor(private teamService: TeamsService) {
    }

    teamList: any[];
    year = '2016-2017-regular';

    ngOnInit() {
        this.getTeams(this.year);
    }

    getTeams(year: string) {
        this.teamService.getTeamList(year)
            .subscribe(res => {
                // List of all the team
                this.teamList = this.teamService.buildTeamList(res);
            });
    }

}
