import { RouterModule } from "@angular/router";
import { AboutComponent } from "./about.component";

export const aboutRoutes = RouterModule.forChild([
    { path: "about", component: AboutComponent }
]);