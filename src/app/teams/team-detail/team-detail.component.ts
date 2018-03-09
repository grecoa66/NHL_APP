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

    constructor(public router: Router,
                public route: ActivatedRoute,
                public teamService: TeamsService) {
    }

    ngOnInit() {
        let something = 'this';
        // this.activatedRoute.paramMap
        //     .switchMap((params: ParamMap) => {
        //         let playoffsStr = (params.get('playoffs') == 'true');
        //         this.teamService.getTeam(params.get('year'), params.get('teamId'), playoffsStr)
        //             .subscribe(res => {
        //                  this.team = this.teamService.buildTeam(res);
        //             });
        //         return Observable.empty();
        //     });

        let year = this.route.snapshot.paramMap.get('year');
        let teamName = this.route.snapshot.paramMap.get('teamName');
        let playoffsStr = (this.route.snapshot.paramMap.get('playoffs') == 'true');
        this.teamService.getTeam(year, teamName, playoffsStr)
                    .subscribe(res => {
                         this.team = this.teamService.buildTeam(res);
                    });
    }

}
