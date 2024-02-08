import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {LandingHeaderComponent} from "../landing-header/landing-header.component";
import {LoginComponent} from "../../login/login.component";
import {MiddleSectionComponent} from "../middle-section/middle-section.component";
import {RegisterComponent} from "../../register/register.component";

@Component({
  selector: 'app-landing-main',
  standalone: true,
    imports: [
        FooterComponent,
        LandingHeaderComponent,
        LoginComponent,
        MiddleSectionComponent,
        RegisterComponent
    ],
  templateUrl: './landing-main.component.html',
  styleUrl: './landing-main.component.css'
})
export class LandingMainComponent {

    login = true;
    register = true;

    locations:string[] = ['Varanasi', 'New Delhi', 'Bhadohi', 'Agra', 'Mumbai', 'Ranch', 'Patna'];
}
