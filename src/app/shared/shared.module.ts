import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { ValidatorComponent } from "./validator/validator.component";
import { InputComponent } from "./input/input.component";
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [ValidatorComponent, InputComponent, TooltipComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ValidatorComponent,
    InputComponent,
    TooltipComponent
  ],
})
export class SharedModule { }
