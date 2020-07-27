import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { GenerateTemplateComponent } from "./pages/generate-template/generate-template.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [GenerateTemplateComponent, HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
