import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoginComponent} from "../auth/login/login.component";
import {RegisterComponent} from "../auth/register/register.component";
import {RestaurantHeaderComponent} from "./restaurant-header/restaurant-header.component";
import {CarouselComponent} from "../utils/carousel/carousel.component";
import {RestaurantFoodComponent} from "./restaurant-food/restaurant-food.component";
import {FooterComponent} from "../landing/footer/footer.component";
import {Food} from "../utils/types/BasicTypes";

@Component({
    selector: 'app-restaurant-main',
    standalone: true,
    imports: [
        LoginComponent,
        RegisterComponent,
        RestaurantHeaderComponent,
        CarouselComponent,
        RestaurantFoodComponent,
        FooterComponent
    ],
    templateUrl: './restaurant-main.component.html',
    styleUrl: './restaurant-main.component.css'
})
export class RestaurantMainComponent {

    mainCourse: Food[] = [
        {
            name: "Sahi Panner",
            price: 200,
            description: "A delicious dish made from panner and spices",
            image: "/assets/images/food/shahi-panner2.png",
            rating: 4.5,
            category: "Veg"
        },

        {
            name: "Butter Chicken",
            price: 300,
            description: "A delicious dish made from chicken and spices",
            image: "assets/images/food/butter-chicken.png",
            rating: 4.5,
            category: "Non-Veg"
        },

        {
            name: "Chicken Biryani",
            price: 250,
            description: "A delicious dish made from chicken and spices",
            image: "assets/images/food/chicken-biryani.png",
            rating: 4.5,
            category: "Non-Veg"
        },

        {
            name: "Veg Biryani",
            price: 200,
            description: "A delicious dish made from vegetables and spices",
            image: "assets/images/food/veg-biryani.png",
            rating: 4.5,
            category: "Veg"
        },

        {
            name: "Masala Dosa",
            price: 100,
            description: "A delicious dish made from dosa and spices",
            image: "assets/images/food/masala-dosa.png",
            rating: 4.5,
            category: "Veg"
        },

        {
            name: "Idli Sambhar",
            price: 100,
            description: "A delicious dish made from idli and sambhar",
            image: "assets/images/food/idli-sambhar.png",
            rating: 4.5,
            category: "Veg"
        },

        {
            name: "Shahi Mashroom",
            price: 200,
            description: "A delicious dish made from mashroom and spices",
            image: "assets/images/food/shahi-mashroom.png",
            rating: 4.5,
            category: "Veg"
        }

    ]

}
