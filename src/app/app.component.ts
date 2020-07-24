import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ThemeService } from "./core/services/theme.service";
declare var require: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "ui-core";
  langs = ["en", "fa"];
  constructor(
    private translateService: TranslateService,
    private themeService: ThemeService
  ) {}
  ngOnInit() {
    if (false) {
      require("style-loader!../assets/scss/theme3/theme3.scss");
    } else {
      require("style-loader!../assets/scss/theme4/theme4.scss");
    }
    let browserlang = this.translateService.getBrowserLang();
    console.log(browserlang);
    if (this.langs.indexOf(browserlang) > -1) {
      this.translateService.setDefaultLang(browserlang);
    } else {
      this.translateService.setDefaultLang("fa");
    }
  }
  an = require("../assets/i18n/fr.json");

  public useLanguage(lang: string): void {
    this.translateService.use(lang);
    this.translateService.setTranslation(lang, this.an, true);
    // this.translateService.setDefaultLang(this.an);
  }

  public toggleDark() {
    this.themeService.toggleDark();
  }
  public toggleLight() {
    this.themeService.toggleLight();
  }
}
