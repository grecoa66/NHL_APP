// Dependencies
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

//Components
import {AppComponent} from './app.component';
import {PlayersComponent} from './players/players.component';


//Services
import {AppService} from './app.service';
import {PlayersService} from './players/services/players.service';
import { PlayerCardComponent } from './player-card/player-card.component';
import {PlayerListComponent} from "./player-list/player-list.component";

@NgModule({
    declarations: [
        AppComponent,
        PlayersComponent,
        PlayerListComponent,
        PlayerCardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        AppService,
        PlayersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
