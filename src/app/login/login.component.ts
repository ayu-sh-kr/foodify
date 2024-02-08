import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    @Input()
    login = false;

    @Output()
    loginChange = new EventEmitter<boolean>();

    closeLogin() {
        this.login = !this.login;
        this.loginChange.emit(this.login);
    }

}
