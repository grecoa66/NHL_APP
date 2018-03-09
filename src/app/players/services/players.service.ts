import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import {Player} from "../player";

@Injectable()
export class PlayersService {

    url: string;

    constructor(private http: HttpClient) {
        this.url = 'api/players/2016-2017-regular';
    }

    getAllPlayers() {
        return this.http.get(this.url);
    }

    buildPlayer(data: any){
        let player = data;
        return new Player(
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

    }

    buildPlayerList(data : any){
        let players : any[] = [];

        // Put all players into js array
        _.forEach(data, (player) => {
            players.push(this.buildPlayer(player));
        });

        return players;
    }


}
