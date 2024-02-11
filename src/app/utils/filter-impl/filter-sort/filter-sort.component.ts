import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter-sort',
  standalone: true,
  imports: [],
  templateUrl: './filter-sort.component.html',
  styleUrl: './filter-sort.component.css'
})
export class FilterSortComponent {

    @Input()
    value:string = 'Popularity';

    @Output()
    valueChange = new EventEmitter<string>();

    setSort(value:string){
        this.value = value;
        this.valueChange.emit(this.value);
    }
}
