import { Routes } from '@angular/router';
import {LandingMainComponent} from "./landing/landing-main/landing-main.component";
import {HomeComponent} from "./city-page/home/home.component";

export const routes: Routes = [
    {
        path: '',
        component: LandingMainComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
