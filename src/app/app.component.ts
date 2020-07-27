import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ThemeService } from "./core/services/theme.service";
import { ApiService } from "./core/services/api.service";
import { HttpClient } from "@angular/common/http";
import { LanguageService } from "./core/services/language.service";

declare var require: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ui-core";
  langs = ["en", "fa"];
  constructor(
    private translateService: TranslateService,
    private themeService: ThemeService,
    private http: HttpClient,
    private languageService: LanguageService
  ) {}
  ngOnInit() {
    this.languageService.initLanguage();
    if (true) {
      require("style-loader!../assets/scss/theme3/theme3.scss");
    } else {
      require("style-loader!../assets/scss/theme4/theme4.scss");
    }

    this.getTextFile().subscribe(data => {
      let index = data.indexOf("=");
      let jsonString = data.slice(index + 1);
      let jsonObj = JSON.parse(jsonString);
      const {
        primaryColor,
        primaryHoverColor,
        secondaryColor,
        secondaryHoverColor
      } = jsonObj;
      const colors = {
        primaryColor,
        primaryHoverColor,
        secondaryColor,
        secondaryHoverColor
      };
      this.themeService.setColors(colors);
    });
  }
  translateUrl = require("../assets/i18n/fr.json");
  getTextFile() {
    return this.http.get("api/js/config.js", { responseType: "text" }).pipe();
  }

  public useLanguage(lang: string): void {
    this.translateService.use("fa");
    this.translateService.setTranslation(lang, this.translateUrl, true);
    // this.translateService.setDefaultLang(this.an);
  }

  // public toggleDark() {
  //   this.themeService.setColors();
  // }
}
