import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoginComponent} from "../auth/login/login.component";
import {RegisterComponent} from "../auth/register/register.component";
import {RestaurantHeaderComponent} from "./restaurant-header/restaurant-header.component";
import {CarouselComponent} from "../utils/carousel/carousel.component";
import {RestaurantFoodComponent} from "./restaurant-food/restaurant-food.component";
import {FooterComponent} from "../landing/footer/footer.component";
import {Food} from "../utils/types/BasicTypes";
import {RestaurantProfileComponent} from "./restaurant-profile/restaurant-profile.component";
import {RestaurantSubHeaderComponent} from "./restaurant-subheader/restaurant-sub-header.component";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-restaurant-main',
    standalone: true,
    imports: [
        LoginComponent,
        RegisterComponent,
        RestaurantHeaderComponent,
        CarouselComponent,
        RestaurantFoodComponent,
        FooterComponent,
        RestaurantProfileComponent,
        RestaurantSubHeaderComponent,
        RouterOutlet
    ],
    templateUrl: './restaurant-main.component.html',
    styleUrl: './restaurant-main.component.css'
})
export class RestaurantMainComponent {



}
