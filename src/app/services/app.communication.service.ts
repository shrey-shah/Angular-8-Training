    
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class CommunicationService {
    
    onDataReceived: EventEmitter<number>;
    
    constructor(){
        this.onDataReceived = new EventEmitter<number>();
    }

    ReceiveData(id: number): void {
        this.onDataReceived.emit(id);
    }
}