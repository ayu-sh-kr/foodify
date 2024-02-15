import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-paging',
    standalone: true,
    imports: [],
    templateUrl: './paging.component.html',
    styleUrl: './paging.component.css'
})
export class PagingComponent<T> {

    @Input()
    data!:T;

    @Output()
    dataChange = new EventEmitter<T>();

    start = 0;
    end = 5;

    prev(){

        if(this.start != 0){
            this.start--;
            this.end --;
        }
    }

    forward(){
        this.start++;
        this.end++;
    }

    get range() {
        return Array.from({length: this.end - this.start + 1}, (_, i) => this.start + i);
    }
}
