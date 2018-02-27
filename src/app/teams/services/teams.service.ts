import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import {Team} from '../Team'

@Injectable()
export class TeamsService {


    constructor(private http: HttpClient) {
    }

    getTeamList(year: string) {
        // Configure the url
        let url = `api/teams/${year}`;
        // Make the http request
        return this.http.get(url);
    }

    getTeam(year: string, team: string) {
        // Configure the url
        let url = `api/teams/${year}/${team}`;
        // Make the http request
        return this.http.get(url);
    }

    buildTeamList(data: any) {
        let teams : any[] = [];
        let teamData : any = data;

        _.forEach(teamData, (team) => {
            //let teamId = <number> team.team.ID;
            const currTeam = new Team(
                team.team.ID,
                team.team.Name,
                team.team.City,
                team.team.Abbreviation,
                team.stats.stats.Wins['#text'],
                team.stats.stats.Losses['#text'],
                team.stats.stats.OvertimeLosses['#text'],
                team.stats.stats.Points['#text'],
                team.rank,
                team.stats.stats.GoalsFor['#text'],
                team.stats.stats.GoalsAgainst['#text'],
                team.stats.stats.PowerplayPercent['#text']
            );

            teams.push(currTeam);
        });
        return teams;
    }

}
