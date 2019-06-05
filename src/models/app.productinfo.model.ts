export class ProductInfo {

    public ProductRowId: number;
    public ProductId: string;
    public ProductName: string;
    public Manufacturer: string;
    public CategoryName: string;
    public Description: string;
    public BasePrice: number;

    constructor() {
        this.ProductRowId = 0;
        this.ProductId = "";
        this.ProductName= "";
        this.Manufacturer= "";
        this.Description= "";
        this.CategoryName= "";
        this.BasePrice= 0;
    }
}

// export class ProductInfo {
//     constructor(
//     ProductRowId: number,
//     ProductId: string,
//     ProductName: string,
//     Manufacturer: string,
//     Description: string,
//     CategoryName: string,
//     BasePrice: number
//     )   { }
// }