import { NgModule } from "@angular/core";
import { productRoutes } from "./product.routes";
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from "./product.component";
import { ProductsListComponent } from "./products-list.component";
import { ProductDetailsComponent } from "./product-details.component";
import { ProductsService } from "./products.service";

@NgModule({
    declarations: [ProductComponent, ProductsListComponent, ProductDetailsComponent],
    imports: [SharedModule, productRoutes],
    providers: [ProductsService]
})
export class ProductModule { }
