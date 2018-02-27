import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayersService {

    url: string;

    constructor(private http: HttpClient) {
        this.url = 'api/players/2016-2017-regular';
    }

    getAllPlayers() {
        return this.http.get(this.url);
    }

    playerBuilder(data : any){
        let players : any[] = [];

        let playerData : any = data;
        // Put all players into js array
        _.forEach(playerData, (data) => {
            players.push(data.player);
        });

        return players;
    }


}
