import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'sub-header',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './restaurant-sub-header.component.html',
    styleUrl: './restaurant-sub-header.component.css'
})
export class RestaurantSubHeaderComponent {

    activeClass!:string;

    setActive(div:string){
        this.activeClass = div;
    }
}
