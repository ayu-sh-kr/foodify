import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoginComponent} from "../../auth/login/login.component";
import {RegisterComponent} from "../../auth/register/register.component";

@Component({
    selector: 'app-restaurant-header',
    standalone: true,
    imports: [
        LoginComponent,
        RegisterComponent
    ],
    templateUrl: './restaurant-header.component.html',
    styleUrl: './restaurant-header.component.css'
})
export class RestaurantHeaderComponent {
    loggedIn: boolean = false;

    @Input()
    login = true;
    @Output()
    loginChange = new EventEmitter<boolean>();

    headerUtil = true;

    @Input()
    register = true
    @Output()
    registerChange = new EventEmitter<boolean>();


    showLogin() {
        this.login = !this.login
        this.loginChange.emit(this.login)
    }

    showRegister(){
        this.register = !this.register
        this.registerChange.emit(this.register);
    }

    showHeaderUtil(){
        this.headerUtil = !this.headerUtil;
    }
}
