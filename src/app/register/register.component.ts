import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    @Input()
    register = false;

    @Output()
    registerChange = new EventEmitter<boolean>();

    disable = true;


    @ViewChild('name') name!: ElementRef;

    @ViewChild('email') email!: ElementRef;

    @ViewChild('button') button!: ElementRef;

    @ViewChild('password') password!: ElementRef;

    greenClass = "w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-green-600 focus:ring-1"

    redClass = "w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-red-600 focus:ring-1"

    buttonDisabled = "w-full bg-gray-300 text-white font-bold py-2 px-4 rounded-md opacity-50 cursor-not-allowed"

    buttonEnabled = "w-full bg-rose-500 rounded-md py-2 text-white font-semibold"



    closeRegister() {
        this.register = !this.register;
        this.registerChange.emit(this.register);
    }

    verifyName(){
        let value = this.name.nativeElement.value;
        let rgx = /^[a-zA-Z\s]*$/;
        this.name.nativeElement.className = (this.testValue(rgx, value) && value.length > 0) ? this.greenClass : this.redClass;
        return this.testValue(rgx, value) && value.length > 0
    }

    verifyEmail() {
        let value = this.email.nativeElement.value;
        let rgx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        this.email.nativeElement.className = this.testValue(rgx, value) ? this.greenClass : this.redClass;
        return this.testValue(rgx, value);
    }

    verifyPassword() {
        let value = this.password.nativeElement.value;
        if(value.length > 6 && this.verifyName() && this.verifyEmail()){
            this.disable = false;
            this.button.nativeElement.className = this.buttonEnabled;
            this.password.nativeElement.className = this.greenClass;
        }else {
            this.password.nativeElement.className = this.redClass;
            this.button.nativeElement.className = this.buttonDisabled;
            this.disable = true;
        }
    }

    testValue(rgx: RegExp, value: string){
        return rgx.test(value);
    }

}
