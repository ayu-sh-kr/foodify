import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.css'
})
export class LandingHeaderComponent {

    @Input()
    login = true;

    @Output()
    loginChange = new EventEmitter<boolean>();

    @Input()
    register = true;

    @Output()
    registerChange = new EventEmitter<boolean>();


    openLogin() {
        this.login = !this.login;
        this.loginChange.emit(this.login);
    }

    openRegister() {
        this.register = !this.register;
        this.registerChange.emit(this.register);
    }

}
