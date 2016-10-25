import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./products.service";
import { ProductModel } from "./product.model";

@Component(
    {
        template: `
            <h2>Products list</h2>
            <ul>
                <li *ngFor="let product of products"><a [routerLink]="product.id">{{product.name}}</a></li>
            </ul>    
        `
    })
export class ProductsListComponent implements OnInit {
    constructor(private productsService: ProductsService) {
        
    }

    products: ProductModel[];

    ngOnInit(): void {
        this.productsService.getProducts().subscribe(data => this.products = data);
    }
}