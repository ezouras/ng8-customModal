import { Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TestPageComponent } from "./test-page/test-page.component";


const applicationRoutes:Routes = [
  {path:"", component:HomeComponent},
  {path:"test-page", component:TestPageComponent}
]

export const routing = RouterModule.forRoot(applicationRoutes);
