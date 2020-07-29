import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "tooltip",
  template: `<span *ngIf="show" class="tooltip"
    >{{ text }} <span></span
  ></span>`,
  styleUrls: [],
})
export class TooltipComponent implements OnInit {
  constructor() {}
  @Input() show;
  @Input() text;
  ngOnInit(): void {}
}
