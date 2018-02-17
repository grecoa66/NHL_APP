import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppService {

    constructor(private http: HttpClient) {
    }

    getData() {
        let url = 'http://localhost:3000/api';
        return this.http.get(url)
            .map(response => response);
    }
}
