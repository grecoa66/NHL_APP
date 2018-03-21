import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {TeamsService} from "../services/teams.service";
import {Team} from "../team";
import {Observable} from "rxjs";
import {PlayersService} from "../../players/services/players.service";

@Component({
    selector: 'app-team-detail',
    templateUrl: './team-detail.component.html',
    styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

    team: Team;
    players: any[];
    year: string;
    playoffs: boolean;
    dataIsReady: boolean = false;

    constructor(public router: Router,
                public route: ActivatedRoute,
                public teamService: TeamsService,
                public playerService: PlayersService) {
    }

    ngOnInit() {
        // Get params from the route and call service with details
        // Don't render page until data is acquired
        this.year = this.route.snapshot.paramMap.get('year');
        this.playoffs = (this.route.snapshot.paramMap.get('playoffs') == 'true');
        let teamName = this.route.snapshot.paramMap.get('teamName');
        this.teamService.getTeam(this.year, teamName, this.playoffs)
            .subscribe(res => {
                let response: any = res;
                this.team = this.teamService.buildTeam(response.team[0]);
                this.players = this.playerService.buildPlayerList(response.players);
                this.dataIsReady = true;
            });
    }

    goBack() {
        this.router.navigate([`/teams/${this.year}`]);
    }

    isGoalDiffPositive(){
        return (this.team.goalDifferential > 0);
    }

}
