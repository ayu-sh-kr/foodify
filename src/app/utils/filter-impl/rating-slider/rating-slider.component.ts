import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-rating-slider',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './rating-slider.component.html',
  styleUrl: './rating-slider.component.css'
})
export class RatingSliderComponent {
    @Input()
    rating: number = 0;

    @Output() ratingChange = new EventEmitter<number>();

    onRatingChange(event: any) {
        this.rating = event.target.value;
        this.ratingChange.emit(this.rating);
    }
}
