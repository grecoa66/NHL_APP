import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  service : AppService;

  constructor(service : AppService){
    this.service = service;
  }

  ngOnInit(){
    this.service.getData()
      .subscribe(res => {
        console.log('Response: ', res);
      });
  }
}
