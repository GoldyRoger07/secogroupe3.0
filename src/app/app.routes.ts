import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Homepage2Component } from './pages/homepage2/homepage2';
import { Services } from './pages/services/services';

export const routes: Routes = [
    {path: '',redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomePage },
    { path: 'services', component: Services },
    // { path: '**', redirectTo: '/notfound' }
];
