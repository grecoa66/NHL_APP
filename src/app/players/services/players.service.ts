import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import {Skater} from '../player-objects/skater';
import {Goalie} from '../player-objects/goalie';

@Injectable()
export class PlayersService {

    url: string;

    players : any[] = [];
    forwards : Skater[] = [];
    defenseman : Skater[] = [];
    goalies : Goalie[] = [];
    skaters : Skater[] = [];

    constructor(private http: HttpClient) {
        this.url = 'api/players/2016-2017-regular';
    }

    getAllPlayers(year, playoffs) {
        if(playoffs){
            let url = `api/players/playoffs/${year}-regular`;
            return this.http.get(this.url);
        }else {
            let url = `api/players/${year}-regular`;
            return this.http.get(this.url);
        }
    }

    /**
     * Return list of only forwards
     * @returns {Skater[]}
     */
    getForwards(){
        _.forEach(this.players, (player) => {
            if( player._position === 'LW'
                || player._position === 'RW'
                || player._position === 'C')
            {
                this.forwards.push(player);
            }
        });
        return this.forwards;
    }

    /**
     * return list of only defenseman
     * @returns {Skater[]}
     */
    getDefenseman(){
        _.forEach(this.players, (player) => {
            if(player._position === 'D'){
                this.defenseman.push(player);
            }
        });
        return this.defenseman;
    }

    /**
     * return list of only goalies
     * @returns {Goalie[]}
     */
    getGoalies(){
        _.forEach(this.players, (player) => {
            if(player._position === 'G') {
                this.goalies.push(player);
            }
        });
        return this.goalies;
    }

    getSkaters(){
        _.forEach(this.players, (player) => {
            if(player._position !== 'G') {
                this.skaters.push(player);
            }
        });
        return this.skaters;
    }

    getPlayers(){
        if(this.players.length > 0) {
            return this.players;
        }else{
            return [];
        }
    }

    buildPlayerList(data : any){

        // Put all players into js array
        _.forEach(data, (player) => {
            this.players.push(this.buildPlayer(player));
        });

        return this.players;
    }

    buildPlayer(data: any){
        let player = data;
        if(player.player.Position !== 'G') {
            return new Skater(
                player.player.ID,
                player.player.LastName,
                player.player.FirstName,
                player.player.JerseyNumber,
                player.player.Position,
                player.player.Height,
                player.player.Weight,
                player.player.BirthDay,
                player.player.Age,
                player.player.BirthCity,
                player.player.BirthCountry,
                player.player.IsRookie,
                player.team.City,
                player.team.Name,
                player.team.Abbreviation,
                player.team.ID,
                player.stats.stats.Goals['#text'],
                player.stats.stats.Assists['#text'],
                player.stats.stats.Points['#text'],
                player.stats.stats.PlusMinus['#text'],
                player.stats.stats.Shots['#text'],
                player.stats.stats.ShotPercentage['#text'],
                player.stats.stats.PenaltyMinutes['#text'],
                player.stats.stats.PowerplayPoints['#text'],
                player.stats.stats.ShorthandedGoals['#text'],
                player.stats.stats.Hits['#text'],
                player.stats.stats.FaceoffPercent['#text']
            );
        }else{
            return new Goalie(
                player.player.ID,
                player.player.LastName,
                player.player.FirstName,
                player.player.JerseyNumber,
                player.player.Position,
                player.player.Height,
                player.player.Weight,
                player.player.BirthDay,
                player.player.Age,
                player.player.BirthCity,
                player.player.BirthCountry,
                player.player.IsRookie,
                player.team.City,
                player.team.Name,
                player.team.Abbreviation,
                player.team.ID,
                player.stats.stats.Wins['#text'],
                player.stats.stats.Losses['#text'],
                player.stats.stats.OvertimeLosses['#text'],
                player.stats.stats.GoalsAgainst['#text'],
                player.stats.stats.Saves['#text'],
                player.stats.stats.GoalsAgainstAverage['#text'],
                player.stats.stats.SavePercentage['#text'],
                player.stats.stats.Shutouts['#text']
            )
        }

    }

}
