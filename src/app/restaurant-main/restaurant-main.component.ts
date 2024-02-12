import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoginComponent} from "../auth/login/login.component";
import {RegisterComponent} from "../auth/register/register.component";
import {RestaurantHeaderComponent} from "./restaurant-header/restaurant-header.component";
import {CarouselComponent} from "../utils/carousel/carousel.component";

@Component({
    selector: 'app-restaurant-main',
    standalone: true,
    imports: [
        LoginComponent,
        RegisterComponent,
        RestaurantHeaderComponent,
        CarouselComponent
    ],
    templateUrl: './restaurant-main.component.html',
    styleUrl: './restaurant-main.component.css'
})
export class RestaurantMainComponent {

}
