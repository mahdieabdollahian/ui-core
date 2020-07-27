import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { ValidatorComponent } from "./validator/validator.component";

@NgModule({
  declarations: [ValidatorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ValidatorComponent
  ]
})
export class SharedModule {}
