import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Route } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { MenComponent } from "./men/men.component";
import { WomenComponent } from "./women/women.component";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";

const appRoutes : Routes = [
    { path:'',component: HomeComponent },
    { path:'men',component: MenComponent },
    { path:'women',component: WomenComponent },
    { path:'create',component: CreateComponent },
    { path:'edit',component: EditComponent },
    { path:'edit/:id',component: EditComponent },
    { path:'**',component: HomeComponent }
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);