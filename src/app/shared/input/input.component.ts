import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input",
  template: `<div class="input-container" [formGroup]="form">
    <input
      (mouseover)="show()"
      (mouseout)="hide()"
      type="text"
      formControlName="{{ formData.name }}"
      placeholder="{{ formData.placeholder }}"
      [required]="formData.required"
    />
    <tooltip [text]="formData.tooltip" [show]="showTooltip"></tooltip>
    <validator
      *ngIf="submitted"
      errormessage="{{ formData.errorMessage }}"
      name="{{ formData.name }}"
      [form]="form"
    >
    </validator>
  </div>`,
  styleUrls: [],
})
export class InputComponent implements OnInit {
  constructor() {}
  @Input() formData;
  @Input() type;
  @Input() form;
  @Input() submitted;
  showTooltip: boolean = false;

  ngOnInit(): void {}
  show() {
    this.showTooltip = true;
  }
  hide() {
    this.showTooltip = false;
  }
}
