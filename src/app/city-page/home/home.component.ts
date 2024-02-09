import {Component, Output, ViewChild} from '@angular/core';
import {CarouselComponent} from "../../utils/carousel/carousel.component";
import {LoginComponent} from "../../login/login.component";
import {RegisterComponent} from "../../register/register.component";
import {HomeHeaderComponent} from "../home-header/home-header.component";
import {CategoryHeaderComponent} from "../category-header/category-header.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        CarouselComponent,
        LoginComponent,
        RegisterComponent,
        HomeHeaderComponent,
        CategoryHeaderComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    loggedIn = false;
    login = true;
    register = true
}


