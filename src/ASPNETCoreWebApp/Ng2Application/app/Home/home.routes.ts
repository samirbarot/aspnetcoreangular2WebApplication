import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

export const homeRoutes = RouterModule.forChild([
    { path: "home", component: HomeComponent }
]);