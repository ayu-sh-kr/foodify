import { Component } from '@angular/core';
import {Collection} from "../../utils/types/BasicTypes";
import {GenericCarouselComponent} from "../../utils/generic-carousel/generic-carousel.component";

@Component({
  selector: 'collection',
  standalone: true,
    imports: [
        GenericCarouselComponent
    ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {

    collections:Collection[] = [
        new Collection('/assets/images/collection/veggie.png', 'Veggie Delight', 'Description 1', 10),
        new Collection('/assets/images/collection/biryani.png', 'Biryani', 'Description 2', 20),
        new Collection('/assets/images/collection/non-veg.png', 'Non Veg', 'Description 3', 30),
        new Collection('/assets/images/collection/night-hunger.png', 'Night Hunger', 'Description 4', 40),
    ]
}
