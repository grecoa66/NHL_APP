import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PlayersService{

  url : string;

  constructor(private http : HttpClient ) {
    this.url = 'api/players';
  }

  getAllPlayers(){
    return this.http.get(this.url, {responseType : 'text'});
  }


}
