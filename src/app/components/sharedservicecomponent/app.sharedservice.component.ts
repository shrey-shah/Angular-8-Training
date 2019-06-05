import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../sharedmodule/services/app.http.service';
import { ProductInfo } from './../../../models/app.productinfo.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-sharedservice-component',
    templateUrl: './app.sharedservice.component.html' 
})
export class SharedServiceComponent implements OnInit {
    products: Array<ProductInfo>;
    product: ProductInfo;
    tableColumns: Array<string>;
    frmData: FormGroup;
    toggleForm: boolean;
    searchText: string;
    
    constructor(private serv: HttpService) { 
        this.products = new Array<ProductInfo>();
        this.product = new ProductInfo();
        this.tableColumns = new Array<string>();
        this.toggleForm = false;
        this.searchText = "";

        this.frmData = new FormGroup({
            ProductRowId: new FormControl(this.product.ProductRowId),
            ProductId: new FormControl(this.product.ProductId),
            ProductName: new FormControl(this.product.ProductName),
            Manufacturer: new FormControl(this.product.Manufacturer),
            Description: new FormControl(this.product.Description),
            CategoryName: new FormControl(this.product.CategoryName),
            BasePrice: new FormControl(this.product.BasePrice),
    });
}

    ngOnInit(): void { 
        for(let column in this.product) {
            this.tableColumns.push(column);
        }
        this.loadData();
    }

    loadData(): void {
        this.serv.getProducts().subscribe((resp) => {
            this.products = resp;
            this.toggleForm = false;
            console.log(JSON.stringify(resp));
        });
    }

    saveData(): void {
        let prd: ProductInfo = this.frmData.value;

        if(prd.ProductRowId != 0) {
            this.updateData(prd);
        }
        
        this.serv.postProduct(prd).subscribe((resp) => {
            console.log(resp);
            this.loadData();
        },(error) => {
            console.log(`Error Occuerd ${error.status}`);
        });
    }

    updateData(prd: ProductInfo): void {
        //let prd: ProductInfo = this.frmData.value;
        
        this.serv.putProduct(prd.ProductRowId, prd).subscribe((resp) => {
            console.log(resp);
            this.loadData();
        },(error) => {
            console.log(`Error Occuerd ${error.status}`);
        });
    }

    deleteData(id: number): void {
      //  let prd: ProductInfo = this.frmData.value;
        
        this.serv.deleteProduct(id).subscribe((resp) => {
            console.log(resp);
            this.loadData();
        },(error) => {
            console.log(`Error Occuerd ${error.status}`);
        });
    }

    isToggleForm(): void {
        this.toggleForm = !this.toggleForm;
    }

    clear(): void {
        // redeclare object
        this.product = new ProductInfo();
        // nullify all values
        //this.initProp();
        // set these nullify values to formGroup 
        this.frmData.setValue(this.product);
    }

    deleteSelected(prod: ProductInfo): void {
        this.deleteData(prod.ProductRowId);
    }

    getSelectedStudent(prod: ProductInfo): void {
        this.frmData.setValue(prod);
        this.toggleForm = true;
    }

}