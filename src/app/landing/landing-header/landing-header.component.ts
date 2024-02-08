import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

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

    side = true;

    @ViewChild('sidebar') sidebar!: ElementRef;

    sidebarOpen = "absolute transition-all duration-500 ease-in-out transform translate-x-full md:hidden w-2/3 sm:w-1/2 p-2 h-full  bg-white text-black z-20";

    sidebarClose = "absolute transition-all duration-500 ease-in-out transform -translate-x-full md:hidden w-2/3 sm:w-1/2 p-2 h-full bg-white text-black z-20";


    openLogin() {
        this.login = !this.login;
        this.loginChange.emit(this.login);
    }

    openRegister() {
        this.register = !this.register;
        this.registerChange.emit(this.register);
    }

    openSide() {
        this.side = !this.side;
        if (!this.side) {
            this.sidebar.nativeElement.className = this.sidebarOpen;
        } else {
            this.sidebar.nativeElement.className = this.sidebarClose;
        }
    }
}
