import {Component} from '@angular/core';
import {RestaurantDetails} from "../types/BasicTypes";

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [],
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})
export class ListComponent {

    restaurantDetails:RestaurantDetails[] = [
        new RestaurantDetails("KFC", "KFC, 1st Floor, 1st Main, 7th Cross, BTM, Bangalore", "Special Pack", 4.5, "10:00 AM - 11:00 PM", 2, "KFC, 1st Floor, 1st Main, 7th Cross, BTM, Bangalore", "/assets/images/restaurant/kfc.png"),
        new RestaurantDetails("Dominos", "Dominos, 1st Floor, 1st Main, 7th Cross, BTM, Bangalore", "Special Pack", 4.5, "10:00 AM - 11:00 PM", 2, "Dominos, 1st Floor, 1st Main, 7th Cross, BTM, Bangalore", "/assets/images/restaurant/dominos.png"),
        new RestaurantDetails("Pizza Hut", "Pizza Hut, 1st Floor, 1st Main, 7th Cross, BTM, Bangalore", "Special Pack", 4.5, "10:00 AM - 11:00 PM", 2, "Pizza Hut, 1st Floor, 1st Main, 7th Cross, BTM, Bangalore", "/assets/images/restaurant/pizza-hut.png"),
        new RestaurantDetails("Burger King", "Burger King, 1st Floor, 1st Main, 7th Cross, BTM, Bangalore", "Special Pack", 4.5, "10:00 AM - 11:00 PM", 2, "Burger King, 1st Floor, 1st Main, 7th Cross, BTM, Bangalore", "/assets/images/restaurant/burger-king.png"),
        new RestaurantDetails("Subway", "Subway, 1st Floor, 1st Main, 7th Cross, BTM, Bangalore", "Special Pack", 4.5, "10:00 AM - 11:00 PM", 2, "Subway, 1st Floor, 1st Main, 7th Cross, BTM, Bangalore", "/assets/images/restaurant/subway.png"),
    ];

}
