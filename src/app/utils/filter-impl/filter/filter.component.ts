import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {FilterSortComponent} from "../filter-sort/filter-sort.component";
import {RatingSliderComponent} from "../rating-slider/rating-slider.component";

@Component({
  selector: 'app-filter',
  standalone: true,
    imports: [
        RouterOutlet,
        NgIf,
        FilterSortComponent,
        RatingSliderComponent
    ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

    @Input()
    filter:boolean = false;

    @Output()
    filterChange = new EventEmitter<boolean>();

    activeDiv:string = 'sort';

    value:string = 'Popularity';

    @Input()
    rating = 0;

    @Output()
    ratingChange = new EventEmitter<number>();


    setActive(div:string){
        this.activeDiv = div;
    }

    close(){
        this.filterChange.emit(true);
    }

    setSort(value:string){
        this.value = value;
    }

    setRating(rating: number) {
        this.rating = rating
    }
}
