import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Homepage2Component } from './pages/homepage2/homepage2';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'homepage2', component: Homepage2Component },
    // { path: '**', redirectTo: '/notfound' }
];
