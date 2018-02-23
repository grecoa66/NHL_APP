// Dependencies
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//Components
import {AppComponent} from './app.component';
import {PlayersComponent} from './players/players.component';


//Services
import {AppService} from './app.service';
import {PlayersService} from './players/services/players.service';
import { PlayerCardComponent } from './players/player-card/player-card.component';
import {PlayerListComponent} from './players/player-list/player-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// All app components and dependencies
@NgModule({
    declarations: [
        AppComponent,
        PlayersComponent,
        PlayerListComponent,
        PlayerCardComponent,
        HomePageComponent,
        HeaderComponent,
        TeamsComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule

    ],
    providers: [
        AppService,
        PlayersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
