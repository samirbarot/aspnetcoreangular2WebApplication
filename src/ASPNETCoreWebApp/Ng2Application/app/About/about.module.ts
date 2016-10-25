import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { SharedModule } from "../shared/shared.module";
import { aboutRoutes } from "./about.routes";

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        SharedModule, aboutRoutes
    ],
    exports: [
        AboutComponent
    ]
})
export class AboutModule { }