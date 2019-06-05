import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../sharedmodule/services/app.http.service';
import { ProductInfo } from './../../../models/app.productinfo.model';
@Component({
    selector: 'app-sharedservice-component',
    templateUrl: './app.sharedservice.component.html' 
})
export class SharedServiceComponent implements OnInit {
    products: Array<ProductInfo>;
    
    constructor(private serv: HttpService) { 
        this.products = new Array<ProductInfo>();
    }

    ngOnInit(): void { 
        this.loadData();
    }

    loadData(): void {
        this.serv.getProducts().subscribe((resp) => {
            this.products = resp;
            console.log(JSON.stringify(resp));
        });
    }

    saveData(): void {
        let prd: ProductInfo = new ProductInfo(5,'Prd0044','Laptop','ECT','IBM','1TB SSD',120000);
        
        this.serv.postProduct(prd).subscribe((resp) => {
            console.log(resp);
        },(error) => {
            console.log(`Error Occuerd ${error.status}`);
        });
    }
}