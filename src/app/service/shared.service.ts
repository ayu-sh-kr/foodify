import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService<T> {

    public dataEmitter = new EventEmitter<T>()

    constructor() {
    }

    emitData(data:T){
        this.dataEmitter.emit(data);
    }

}
