import { Routes } from '@angular/router';
import {LandingMainComponent} from "./landing/landing-main/landing-main.component";
import {HomeComponent} from "./city-page/home/home.component";
import {RestaurantMainComponent} from "./restaurant-main/restaurant-main.component";
import {RestaurantOverviewComponent} from "./restaurant-main/restaurant-overview/restaurant-overview.component";
import {RestaurantReviewComponent} from "./restaurant-main/restaurant-review/restaurant-review.component";
import {RestaurantOrderOnlineComponent} from "./restaurant-main/restaurant-order-online/restaurant-order-online.component";
import {RestaurantMenuComponent} from "./restaurant-main/restaurant-menu/restaurant-menu.component";
import {RestaurantPhotoComponent} from "./restaurant-main/restaurant-photo/restaurant-photo.component";

export const routes: Routes = [
    {
        path: '',
        component: LandingMainComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: "restaurant",
        component: RestaurantMainComponent,
        children: [
            {
                path: "overview",
                component: RestaurantOverviewComponent
            },

            {
                path: "reviews",
                component: RestaurantReviewComponent
            },

            {
                path: "order",
                component: RestaurantOrderOnlineComponent
            },

            {
                path: "menu",
                component: RestaurantMenuComponent
            },

            {
                path: "photos",
                component: RestaurantPhotoComponent
            }
        ]
    }
];
