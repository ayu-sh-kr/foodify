import {Component, Input} from '@angular/core';
import {Food} from "../../utils/types/BasicTypes";

@Component({
    selector: 'app-restaurant-food',
    standalone: true,
    imports: [],
    templateUrl: './restaurant-food.component.html',
    styleUrl: './restaurant-food.component.css'
})
export class RestaurantFoodComponent {

    @Input()
    category: string = "Main Course";

    @Input()
    description: string = "A delicious dish made with love and spices to make your day better";

    @Input()
    foods!:Food[];
}
