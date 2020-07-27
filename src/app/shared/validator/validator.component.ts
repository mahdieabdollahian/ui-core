import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "validator",
  templateUrl: "./validator.component.html",
  styleUrls: ["./validator.component.scss"]
})
export class ValidatorComponent implements OnInit {
  @Input() form: any;
  @Input() name: string;
  @Input() errormessage: string;
  inputDate: any;
  constructor() {}

  ngOnInit(): void {}
}
