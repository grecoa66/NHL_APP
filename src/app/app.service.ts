import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getData(){
    let url = 'http://localhost:3000/api';
    return this.http.get(url)
      .map(response => response._body);
  }
}
