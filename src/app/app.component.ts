import {Component, HostListener} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from "./landing/footer/footer.component";
import {NgOptimizedImage} from "@angular/common";
import {LandingHeaderComponent} from "./landing/landing-header/landing-header.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {data} from "autoprefixer";
import {MiddleSectionComponent} from "./landing/middle-section/middle-section.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FooterComponent, NgOptimizedImage, LandingHeaderComponent, LoginComponent, RegisterComponent, MiddleSectionComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'foodify';
}
