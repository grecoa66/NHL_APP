import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {TeamsService} from "../services/teams.service";
import {Team} from "../team";
import {Observable} from "rxjs";

@Component({
    selector: 'app-team-detail',
    templateUrl: './team-detail.component.html',
    styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

    team: Team;
    year: string;
    dataIsReady: boolean = false;

    constructor(public router: Router,
                public route: ActivatedRoute,
                public teamService: TeamsService) {
    }

    ngOnInit() {
        // Get params from the route and call service with details
        // Don't render page until data is acquired
        this.year = this.route.snapshot.paramMap.get('year');
        let teamName = this.route.snapshot.paramMap.get('teamName');
        let playoffsStr = (this.route.snapshot.paramMap.get('playoffs') == 'true');
        this.teamService.getTeam(this.year, teamName, playoffsStr)
            .subscribe(res => {
                this.team = this.teamService.buildTeam(res.team[0]);
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
