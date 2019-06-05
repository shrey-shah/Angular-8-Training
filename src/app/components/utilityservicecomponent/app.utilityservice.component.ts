import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/app.utility.services';

@Component({
    selector: 'app-utilityservice-component',
    templateUrl: './app.utilityservice.view.html',
})
export class UtilityServiceComponent implements OnInit {
    message: string;
    msg: string;
    //inject thje service using constructor injection
    constructor(private serv: UtilityService) { 
        this.message = "";
        this.msg = "";
    }

    ngOnInit(): void { 
        this.message = this.serv.changeStringCase('Angular Sevice', 'U');
        this.msg = this.serv.changeStringCase('Angular Sevice', 'L');
    }
}
