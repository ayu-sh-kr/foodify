import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'home-header',
  standalone: true,
  imports: [],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {

    loggedIn = false;

    @Input()
    login = true;
    @Output()
    loginChange = new EventEmitter<boolean>();

    @Input()
    register = true
    @Output()
    registerChange = new EventEmitter<boolean>();

    @ViewChild('sidebar') sidebar!:ElementRef;

    side = true;

    sidebarOpen = "absolute left-0 top-0 md:hidden w-2/3 sm:w-1/2 p-2 h-[65vh] bg-white text-black z-20";

    sidebarClose = "absolute left-0 top-0 md:hidden w-1/2 p-2 h-[65vh]bg-white text-black z-20";


    showLogin() {
        this.login = !this.login
        this.loginChange.emit(this.login)
    }

    showRegister(){
        this.register = !this.register
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
