import {Component, OnInit} from '@angular/core';
import {TeamsService} from "./services/teams.service";

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    teamsLoaded = false;
    teamList: any[];
    yearSelected : string;

    constructor(private teamService: TeamsService) {
    }

    ngOnInit() {}

    getTeams(year: string) {
        console.log('Its happening');
        this.teamService.getTeamList(year)
            .subscribe(res => {
                // List of all the team
                this.teamList = this.teamService.buildTeamList(res);
                this.teamsLoaded = true;
            });
    }
    clearTeams(){
        this.teamsLoaded = false;
        this.teamList = [];
        this.yearSelected = '';
    }

}
