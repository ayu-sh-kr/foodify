import { Component } from '@angular/core';
import {GenericCarouselComponent} from "../../utils/generic-carousel/generic-carousel.component";
import {Food} from "../../utils/types/BasicTypes";

@Component({
  selector: 'top-food',
  standalone: true,
    imports: [
        GenericCarouselComponent
    ],
  templateUrl: './top-food.component.html',
  styleUrl: './top-food.component.css'
})
export class TopFoodComponent {
    foods: Food[]  = [
        new Food('Shahi Paneer', 299, '/assets/images/food/shahi-paneer.png', 4.9),
        new Food('Paneer Butter Masala', 259, '/assets/images/food/paneer-butter.png', 4.8),
        new Food('Chhole Samosa', 99, '/assets/images/food/chhola-samosa.png', 4.5),
        new Food('Ras Malai', 199, '/assets/images/food/ras-malai.png', 4.9),
        new Food('Lassi', 60, '/assets/images/food/lassi.png', 4.9)
    ];

}
