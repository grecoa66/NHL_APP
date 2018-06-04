// Dependencies
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//Components
import {AppComponent} from './app.component';
import {PlayersComponent} from './players/players.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { PlayerCardComponent } from './players/player-card/player-card.component';
import {PlayerListComponent} from './players/player-list/player-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamModalComponent} from './teams/team-modal/team-modal.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component'

//Services
import {AppService} from './app.service';
import {PlayersService} from './players/services/players.service';
import {TeamsService} from './teams/services/teams.service';
import {GamelogsService} from './gamelogs/services/gamelogs.service';

//Modules
import {AppBootstrapModule} from './app-bootstrap.module';
import {AppRoutingModule} from './app-routing.module';
import {PlayerListDetailComponent} from './players/player-list-detail/player-list-detail.component';
import {LoadingScreenComponent} from './loading-screen/loading-screen.component';
import {TeamSortPipe} from './utils/column-sort.pipe';
import {GamelogsComponent} from './gamelogs/gamelogs.component';
import {GamelogListComponent} from './gamelogs/gamelog-list/gamelog-list.component';


// All app components and dependencies
@NgModule({
    declarations: [
        AppComponent,
        PlayersComponent,
        PlayerListComponent,
        PlayerCardComponent,
        PlayerListDetailComponent,
        HomePageComponent,
        HeaderComponent,
        TeamsComponent,
        PageNotFoundComponent,
        TeamsListComponent,
        TeamModalComponent,
        TeamDetailComponent,
        LoadingScreenComponent,
        TeamSortPipe,
        GamelogsComponent,
        GamelogListComponent
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
        TeamsService,
        GamelogsService
    ],
    bootstrap: [AppComponent],
    entryComponents :[
        TeamModalComponent,
        PlayerCardComponent
    ]
})
export class AppModule {

}
