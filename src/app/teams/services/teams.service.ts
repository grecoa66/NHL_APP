import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import {Team} from '../Team'

@Injectable()
export class TeamsService {


    constructor(private http: HttpClient) {}

    getTeamList = (year: string, playoffs: boolean) =>{

        if(playoffs){
            let strLen = year.length;
            year = year.substr(strLen - 4, strLen);
            // Configure the url
            let url = `api/teams/playoffs/${year}`;
            // Make the http request
            return this.http.get(url);
        }else{
            // Configure the url
            let url = `api/teams/${year}`;
            // Make the http request
            return this.http.get(url);
        }

    };

    getTeam = (year: string, team: string, playoffs: boolean) => {

        if(playoffs){
            let strLen = year.length;
            year = year.substr(strLen - 4, strLen);
            // Configure the url
            let url = `api/teams/playoffs/${year}/${team}`;
            return this.http.get(url);
        }else {
            // Configure the url
            let url = `api/teams/${year}/${team}`;
            // Make the http request
            return this.http.get(url);
        }
    };

    buildTeam = (data: any) => {
        let team = data;
        return new Team(
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
            team.stats.GamesPlayed['#text'],
            team.stats.stats.PowerplayPercent['#text'],
            team.stats.stats.PenaltyKillPercent['#text']
        );
    };

    buildTeamList = (data: any) => {
        let teams : any[] = [];

        //Put all teams into an array
        _.forEach(data, (team) => {
            teams.push(this.buildTeam(team));
        });
        return teams;
    };

}
