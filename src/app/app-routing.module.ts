import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamsComponent} from './teams/teams.component';
import {PlayersComponent} from './players/players.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TeamDetailComponent} from "./teams/team-detail/team-detail.component";

// Configure navigation routes
const appRoutes: Routes = [
    {
        path: 'teams',
        component: TeamsComponent,
        pathMatch: 'full'
    },
    {
      path: 'teams/:year',
        component: TeamsComponent
    },
    {
        path: 'team/:year/:playoffs/:teamName',
        component: TeamDetailComponent
    },
    {
        path: 'players',
        component: PlayersComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        component :HomePageComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
}
