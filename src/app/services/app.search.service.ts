import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class SearchService {
    onDataReceived: EventEmitter<string>;
    onCourseIdsReceived: EventEmitter<Array<number>>;

    constructor(){
        this.onDataReceived = new EventEmitter<string>();
        this.onCourseIdsReceived = new EventEmitter<Array<number>>();
    }

    ReceiveData(text: string): void {
        this.onDataReceived.emit(text);
    }

    ReceiveCoursesData(ids: Array<number>): void {
        this.onCourseIdsReceived.emit(ids);
    }
}