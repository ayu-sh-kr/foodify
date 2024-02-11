import {Component, Output, ViewChild} from '@angular/core';
import {CarouselComponent} from "../../utils/carousel/carousel.component";
import {LoginComponent} from "../../auth/login/login.component";
import {RegisterComponent} from "../../auth/register/register.component";
import {HomeHeaderComponent} from "../home-header/home-header.component";
import {CategoryHeaderComponent} from "../category-header/category-header.component";
import {Collection} from "../../utils/types/BasicTypes";
import {CollectionComponent} from "../collection/collection.component";
import {FooterComponent} from "../../landing/footer/footer.component";
import {TopRestaurantsComponent} from "../top-restaurants/top-restaurants.component";
import {TopFoodComponent} from "../top-food/top-food.component";
import {FilterHeaderComponent} from "../../utils/filter-impl/filter-header/filter-header.component";
import {FilterComponent} from "../../utils/filter-impl/filter/filter.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        CarouselComponent,
        LoginComponent,
        RegisterComponent,
        HomeHeaderComponent,
        CategoryHeaderComponent,
        CollectionComponent,
        FooterComponent,
        TopRestaurantsComponent,
        TopFoodComponent,
        FilterHeaderComponent,
        FilterComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    loggedIn = false;
    login = true;
    register = true
    filter = true;

}


