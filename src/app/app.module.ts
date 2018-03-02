// Dependencies
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//Components
import {AppComponent} from './app.component';
import {PlayersComponent} from './players/players.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamsFormComponent } from './teams/teams-form/teams-form.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { PlayerCardComponent } from './players/player-card/player-card.component';
import {PlayerListComponent} from './players/player-list/player-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';

//Services
import {AppService} from './app.service';
import {PlayersService} from './players/services/players.service';
import {TeamsService} from './teams/services/teams.service';

//Modules
import {AppBootstrapModule} from './app-bootstrap.module';
import {AppRoutingModule} from './app-routing.module';

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
        PageNotFoundComponent,
        TeamsFormComponent,
        TeamsListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        AppBootstrapModule

    ],
    providers: [
        AppService,
        PlayersService,
        TeamsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
