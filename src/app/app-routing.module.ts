import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { GenerateTemplateComponent } from "./home/pages/generate-template/generate-template.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "nui",
        component: HomeComponent,
        children: [
          {
            path: "form",
            component: GenerateTemplateComponent,
          },
          {
            path: "",
            redirectTo: "form",
            pathMatch: "full",
          },
        ],
      },
      {
        path: "",
        redirectTo: "nui",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
