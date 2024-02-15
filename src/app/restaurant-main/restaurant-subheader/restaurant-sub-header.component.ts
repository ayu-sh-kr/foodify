import {Component} from '@angular/core';

@Component({
    selector: 'sub-header',
    standalone: true,
    imports: [],
    templateUrl: './restaurant-sub-header.component.html',
    styleUrl: './restaurant-sub-header.component.css'
})
export class RestaurantSubHeaderComponent {

    activeClass!:string;

    setActive(div:string){
        this.activeClass = div;
    }
}
