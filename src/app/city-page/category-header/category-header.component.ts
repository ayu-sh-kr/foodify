import { Component } from '@angular/core';

@Component({
  selector: 'category-header',
  standalone: true,
  imports: [],
  templateUrl: './category-header.component.html',
  styleUrl: './category-header.component.css'
})
export class CategoryHeaderComponent {

    activeDiv:string = '';

    srcDiningBurned = '/assets/images/home-sub-header/burned/dining.png';
    srcDeliveryBurned = '/assets/images/home-sub-header/burned/delivery.png';
    srcPopularBurned = '/assets/images/home-sub-header/burned/popular.png';

    srcDiningColored = '/assets/images/home-sub-header/colored/dining.png'
    srcDeliveryColored = '/assets/images/home-sub-header/colored/delivery.png';
    srcPopularColored = '/assets/images/home-sub-header/colored/popular.png';

    diningImage: string = this.srcDiningBurned;
    deliveryImage: string = this.srcDeliveryBurned;
    popularImage: string = this.srcPopularBurned;

    active = 'text-rose-600 p-2 border-rose-600'

    setActive(div: string) {
        this.activeDiv = div;

        this.diningImage = this.activeDiv === 'dining' ? this.srcDiningColored : this.srcDiningBurned;
        this.deliveryImage = this.activeDiv === 'delivery' ? this.srcDeliveryColored : this.srcDeliveryBurned;
        this.popularImage = this.activeDiv === 'popular' ? this.srcPopularColored : this.srcPopularBurned;
    }
}
