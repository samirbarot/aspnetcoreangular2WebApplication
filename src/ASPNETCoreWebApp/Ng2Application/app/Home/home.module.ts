import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HelloService} from "./hello.service";
import { SharedModule } from "../shared/shared.module";
import { homeRoutes } from "./home.routes";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule, homeRoutes
    ],
    providers: [
        HelloService
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }