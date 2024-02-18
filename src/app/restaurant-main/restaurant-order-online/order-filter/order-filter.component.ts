import {Component} from '@angular/core';
import {SharedService} from "../../../service/shared.service";

@Component({
    selector: 'order-filter',
    standalone: true,
    imports: [],
    templateUrl: './order-filter.component.html',
    styleUrl: './order-filter.component.css'
})
export class OrderFilterComponent {

    constructor(private sharedService:SharedService<string>) {
    }

    active:string = 'Platters';


    setActiveFilter(div:string){
        this.active = div;
        this.sharedService.emitData(div);
    }
}
