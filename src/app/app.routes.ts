import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Homepage2Component } from './pages/homepage2/homepage2';
import { Services } from './pages/services/services';
import { AboutUs } from './pages/about-us/about-us';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '',redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'services', component: Services },
    { path: 'about-us', component: AboutUs },
    { path: 'contact', component: Contact }
    // { path: '**', redirectTo: '/notfound' }
];
