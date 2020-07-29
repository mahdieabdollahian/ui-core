import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input",
  template: `<div [formGroup]="form"
    ><input
      type="text"
      formControlName="{{ formData.name }}"
      placeholder="{{ formData.placeholder }}"
      [required]="formData.required"
    />
    <validator
      *ngIf="submitted"
      errormessage="{{ formData.errorMessage }}"
      name="{{ formData.name }}"
      [form]="form"
    >
    </validator>
  </div>`,
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  constructor() { }
  @Input() formData;
  @Input() type;
  @Input() form;
  @Input() submitted;

  ngOnInit(): void { }
}
