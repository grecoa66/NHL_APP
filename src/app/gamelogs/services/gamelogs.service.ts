import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Gamelog} from "../gamelog-objects/gamelog";
import {Periods} from "../gamelog-objects/periods";

@Injectable()
export class GamelogsService {

    constructor(private http: HttpClient) {
    }

    getGamelogsForDate = (year: string, date: string) => {
        let url = `api/gamelog/${year}-regular/${date}`;
        return this.http.get(url);
    };

    buildGamelogList = (data: any) => {
      let gameScores = null;

      //if there were no games, return null
      if(typeof data.scoreboard.gameScore !== 'undefined'){
          gameScores = data.scoreboard.gameScore;
          return this.buildGamelog(gameScores);
      }else{
          return gameScores;
      }
    };

    buildGamelog = (gameScores : any) => {
        // Create new gamelog objects
        return gameScores.map(game => {
            //create array of period objects
            let periods = game.periodSummary.period.map(period => {
               return new Periods(
                   period['@number'],
                   period.homeScore,
                   period.homeShots,
                   period.awayScore,
                   period.awayShots
               );
            });

            return new Gamelog(
                game.game.homeTeam.Name,
                game.game.homeTeam.City,
                game.game.homeTeam.ID,
                game.homeScore,
                game.homeShots,
                game.game.awayTeam.Name,
                game.game.awayTeam.City,
                game.game.awayTeam.ID,
                game.awayScore,
                game.awayShots,
                game.game.location,
                periods
            );
        });
    };

}
