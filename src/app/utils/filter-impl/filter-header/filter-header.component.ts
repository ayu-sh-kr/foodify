import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'filter-header',
  standalone: true,
  imports: [],
  templateUrl: './filter-header.component.html',
  styleUrl: './filter-header.component.css'
})
export class FilterHeaderComponent {

    @Input()
    filter = false;

    @Output()
    filterChange = new EventEmitter<boolean>();

    open(){
        this.filterChange.emit(false);
    }

}
