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
import {RouterModule, Routes} from '@angular/router';
import { TeamsComponent } from './teams/teams.component';

// Configure navigation routes
const appRoutes: Routes = [
    {path: 'teams', component : TeamsComponent},
    {path: 'players', component : PlayersComponent}
];

// All app components and dependencies
@NgModule({
    declarations: [
        AppComponent,
        PlayersComponent,
        PlayerListComponent,
        PlayerCardComponent,
        HomePageComponent,
        HeaderComponent,
        TeamsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        )
    ],
    providers: [
        AppService,
        PlayersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
