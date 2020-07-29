import { Component, OnInit } from "@angular/core";
import { ThemeService } from "./core/services/theme.service";
import { ApiService } from "./core/services/api.service";
import { LanguageService } from "./core/services/language.service";
declare var require: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "ui-core";
  langs = ["en", "fa"];
  themeAddress: string;
  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
    private apiService: ApiService
  ) {}
  ngOnInit() {
    this.languageService.initLanguage();
    this.setConfig();
    require(`style-loader!../assets/scss/theme5/theme5.scss`);
  }
  translateUrl = require("../assets/i18n/fr.json");
  setConfig() {
    this.apiService.getTextFile("js/config.js").subscribe((data) => {
      let index = data.indexOf("=");
      let jsonString = data.slice(index + 1);
      let jsonObj = JSON.parse(jsonString);
      const {
        primaryColor,
        primaryHoverColor,
        secondaryColor,
        secondaryHoverColor,
      } = jsonObj;
      const colors = {
        primaryColor,
        primaryHoverColor,
        secondaryColor,
        secondaryHoverColor,
      };
      this.themeService.setColors(colors);
      require(`style-loader!../assets/scss/${jsonObj.themeName}/${jsonObj.themeName}.scss`);
    });
  }
}
