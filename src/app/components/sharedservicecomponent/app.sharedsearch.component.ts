import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/services/app.search.service';

@Component({
    selector: 'app-sharedsearch-component',
    templateUrl: './app.sharedsearch.component.html',
})
export class SharedSearchComponent implements OnInit {
    searchText: string;
    private tableColumns: Array<string>;
    constructor(private serv: SearchService) { 
        this.searchText = '';
        this.tableColumns = new Array<string>();
    }

    @Input()
    set TableColumns(c: Array<string>) {
        this.tableColumns = c;
    }

    get TableColumns():Array<string> {
        return this.tableColumns;
    }
    
    onKeyUp(event: any): void {
        this.serv.ReceiveData(this.searchText);
    }
    ngOnInit(): void { }
}
