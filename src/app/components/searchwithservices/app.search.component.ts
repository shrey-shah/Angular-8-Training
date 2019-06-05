import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/app.search.service';

@Component({
    selector: 'app-search-component',
    templateUrl: './app.search.view.html',
})
export class SearchComponent implements OnInit {
    searchText: string;
    constructor(private serv: SearchService) { 
        this.searchText = '';
    }

    onKeyUp(event: any): void {
        this.serv.ReceiveData(this.searchText);
    }
    ngOnInit(): void { }
}
