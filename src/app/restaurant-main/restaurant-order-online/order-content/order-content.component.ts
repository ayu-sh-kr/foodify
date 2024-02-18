import {Component} from '@angular/core';
import {SharedService} from "../../../service/shared.service";
import {OrderCombo} from "../../../utils/types/BasicTypes";
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'order-content',
    standalone: true,
    imports: [
        NgOptimizedImage
    ],
    templateUrl: './order-content.component.html',
    styleUrl: './order-content.component.css'
})
export class OrderContentComponent {

    orders:OrderCombo[] = [
        {
            name: 'Pind punjabi veg thali',
            description: 'Dal makhani+pindi choley+mix vegetables+veg pulao+lachha paratha+mix ' +
                'raita+salad+mint chutney+achaar+1 gulab jamun',
            category: 'Veg',
            subcategory: 'Platters',
            price: 355
        },

        {
            name: 'Special Punjabi Veg Thali',
            description: 'Kadhai paneer+Dal makhani+mix vegetables +veg pulao+butter naan+mix raita+salad+mint chutney+achaar +1 gulab jamun',
            category: 'Veg',
            subcategory: 'Platters',
            price: 375
        },

        {
            name: 'Pind Punjabi Chicken Thali',
            description: 'Butter Chicken+Dal Makhani+Kadhai Paneer+Veg pulao +Butter naan+mix raita+salad+mint chutney+achaar+1 gulab jamun',
            category: 'Non-Veg',
            subcategory: 'Platters',
            price: 415
        },

        {
            name: 'Tomato Dhaniya Shorba',
            description: 'Fine thin broth made of tomato finished with coriander.',
            category: 'Veg',
            subcategory: 'Soups & Salads',
            price: 225
        },

        {
            name: 'Veg Hot & Sour Soup',
            description: 'Veg broth made of vegetable stock with selection of chinese sauces.',
            category: 'Veg',
            subcategory: 'Soups & Salads',
            price: 415
        },


    ]

    veg = 'assets/images/category/veg.png';

    nonVeg = 'assets/images/category/non-veg.png';

    filter:string = 'Platters'

    filteredOrder!: OrderCombo[]

    constructor(private sharedService:SharedService<string>) {
        this.filteredOrder = this.getFilteredOrders();
        this.sharedService.dataEmitter.subscribe(data => {
            this.filter = data;
            this.filteredOrder = this.getFilteredOrders();
        })
    }

    getFilteredOrders():OrderCombo[]{
        return this.orders.filter(ftr => {
            return ftr.subcategory === this.filter;
        })
    }

}
