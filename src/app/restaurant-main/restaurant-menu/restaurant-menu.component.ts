import {Component} from '@angular/core';
import {Food} from "../../utils/types/BasicTypes";
import {RestaurantFoodComponent} from "../restaurant-food/restaurant-food.component";

@Component({
    selector: 'app-restaurant-menu',
    standalone: true,
    imports: [
        RestaurantFoodComponent
    ],
    templateUrl: './restaurant-menu.component.html',
    styleUrl: './restaurant-menu.component.css'
})
export class RestaurantMenuComponent {
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
