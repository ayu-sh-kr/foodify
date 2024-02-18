import {Component} from '@angular/core';
import {OrderCombo} from "../../utils/types/BasicTypes";
import {OrderFilterComponent} from "./order-filter/order-filter.component";
import {OrderContentComponent} from "./order-content/order-content.component";

@Component({
    selector: 'app-restaurant-order-online',
    standalone: true,
    imports: [
        OrderFilterComponent,
        OrderContentComponent
    ],
    templateUrl: './restaurant-order-online.component.html',
    styleUrl: './restaurant-order-online.component.css'
})
export class RestaurantOrderOnlineComponent {

}
