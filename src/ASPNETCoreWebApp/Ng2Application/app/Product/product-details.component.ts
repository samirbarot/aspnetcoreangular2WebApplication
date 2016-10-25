import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "./products.service";
import { ProductModel}  from "./product.model";

@Component(
    {
        template: `
        <h2>Product Details</h2>
        <b>Id: </b>{{product.id}}<br>
        <b>Name: </b>{{product.name}}
        `
    })
export class ProductDetailsComponent implements OnInit {
    constructor(private route: ActivatedRoute, private productsService: ProductsService) {
        
    }

    product: ProductModel;

    ngOnInit(): void {
        // let id = parseInt(this.route.snapshot.params["id"], 10);
        // this.productsService.getProduct(id).subscribe(data => this.product = data);
        this.route.params.pluck<number>("id").subscribe(id => this.productsService.getProduct(id).subscribe(data => this.product = data));
    }
}