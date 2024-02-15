import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-restaurant-profile',
  standalone: true,
    imports: [
        NgClass
    ],
  templateUrl: './restaurant-profile.component.html',
  styleUrl: './restaurant-profile.component.css'
})
export class RestaurantProfileComponent {

    tags:string[] = [
        'Burger', 'Fast Food', 'Momos', 'Pizza', 'Sandwich', 'Desserts', 'Beverages', 'Shake'
    ]
}
