import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../../core/services/api.service";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { LanguageService } from "./../../../core/services/language.service";
import { ThemeService } from "./../../../core/services/theme.service";

@Component({
  selector: "generate-template",
  templateUrl: "./generate-template.component.html",
  styleUrls: []
})
export class GenerateTemplateComponent implements OnInit {
  loginForm: FormGroup;
  formData;
  submitted = false;
  constructor(
    private apiService: ApiService,
    private language: LanguageService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    let group = {};
    this.getForm().subscribe(data => {
      this.formData = data.form;
      this.formData.fields.forEach(element => {
        group[element.name] = new FormControl("");
      });
      this.loginForm = new FormGroup(group);
    });
  }
  checkValidity(form) {
    if (form.valid) {
    } else {
      this.submitted = true;
    }
  }
  getForm() {
    return this.apiService.get("auth/login").pipe();
  }

  changeLanguage(lang) {
    this.language.changeLanguage(lang);
    this.themeService.setDirection(lang);
  }
}
