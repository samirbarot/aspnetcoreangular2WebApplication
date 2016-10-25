﻿import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

const appRoutes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "product", loadChildren: "app/product/product.module#ProductModule"}
];

export const routing = RouterModule.forRoot(appRoutes);
