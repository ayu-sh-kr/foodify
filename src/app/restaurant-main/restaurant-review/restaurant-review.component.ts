import {Component} from '@angular/core';
import {Review} from "../../utils/types/BasicTypes";

@Component({
    selector: 'app-restaurant-review',
    standalone: true,
    imports: [],
    templateUrl: './restaurant-review.component.html',
    styleUrl: './restaurant-review.component.css'
})
export class RestaurantReviewComponent {
    reviews: Review[] = [
        {
            username: 'John Doe',
            rating: 4,
            text: 'Good food and great service',
            comment: 'Good food and great service',
            orderType: 'Delivery',
            votes: 10,
            time: '2 days ago'
        },

        {
            username: 'Jane Doe',
            rating: 3,
            text: 'Good food and great service',
            comment: 'Good food and great service',
            orderType: 'Delivery',
            votes: 10,
            time: '2 days ago'
        },

        {
            username: 'John Doe',
            rating: 4,
            text: 'Good food and great service',
            comment: 'Good food and great service',
            orderType: 'Delivery',
            votes: 10,
            time: '2 days ago'
        },

        {
            username: 'Jane Doe',
            rating: 3,
            text: 'Good food and great service',
            comment: 'Good food and great service',
            orderType: 'Delivery',
            votes: 10,
            time: '2 days ago'
        }

    ];


    upVote(review: Review) {
        review.votes += 1
    }
}
