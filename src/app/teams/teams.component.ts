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
    playoffsEnabled : boolean = false;

    constructor(private teamService: TeamsService) {
    }

    ngOnInit() {}

    /**
     * Call the get teams service for the year supplied
     * @param year
     */
    getTeams(year: string) {
        this.yearSelected = year;

        this.teamService.getTeamList(year, this.playoffsEnabled)
            .subscribe(res => {
                // List of all the team
                this.teamList = this.teamService.buildTeamList(res);
                this.teamsLoaded = true;
            });
    }

    /**
     * Flip the playoffsEnabled boolean. If there is already a year
     * chosen, get the playoffs for that year. If a year is chosen
     * and playoffs is toggled off, get all the teams from that year.
     */
    enablePlayoffs(){
        this.playoffsEnabled = !this.playoffsEnabled;
        //clear the teams
        this.teamList = [];
        // get the year for playoffs
        if(this.yearSelected)
            this.getTeams(this.yearSelected);
    }

    /*
     *  Clear the screen and all data from the server.
     */
    clearTeams(){
        this.teamsLoaded = false;
        this.teamList = [];
        this.yearSelected = '';
    }

}
