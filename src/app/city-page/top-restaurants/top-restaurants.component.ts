import {Component} from '@angular/core';
import {Restaurant} from "../../utils/types/BasicTypes";
import Swiper from "swiper";
import {GenericCarouselComponent} from "../../utils/generic-carousel/generic-carousel.component";

@Component({
  selector: 'top-restaurants',
  standalone: true,
    imports: [
        GenericCarouselComponent
    ],
  templateUrl: './top-restaurants.component.html',
  styleUrl: './top-restaurants.component.css'
})
export class TopRestaurantsComponent{

    swiper!:Swiper;


    restaurants:Restaurant[] = [
        {
            name: 'Burger King',
            rating: 4.5,
            votes: 2000,
            image: '/assets/images/restaurant/burger-king.png'
        },
        {
            name: 'KFC',
            rating: 4.5,
            votes: 2000,
            image: '/assets/images/restaurant/kfc.png'
        },
        {
            name: 'Subway',
            rating: 4.5,
            votes: 2000,
            image: '/assets/images/restaurant/subway.png'
        },
        {
            name: 'Dominos',
            rating: 4.5,
            votes: 2000,
            image: '/assets/images/restaurant/dominos.png'
        },
        {
            name: 'Pizza Hut',
            rating: 4.5,
            votes: 2000,
            image: '/assets/images/restaurant/pizza-hut.png'
        },
        {
            name: 'McDonalds',
            rating: 4.5,
            votes: 2000,
            image: '/assets/images/restaurant/mc-donalds.png'
        }
    ]


}
