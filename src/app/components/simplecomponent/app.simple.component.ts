import {Component} from '@angular/core';

@Component({
 selector:'app-simple-component',
 templateUrl:'./app.simple.view.html'
 
})
 
export class SimpleComponent {
    message: string;
    url: string;
    fullname: string;

    constructor(){
        this.message = "Hello Angular!";
        this.url = "http:/www.devcurry.com";
        this.fullname = '';
    }

    display(): void {
        this.message = 'Click event is fired..';
        //this.fullname = 'abc';
    }

}