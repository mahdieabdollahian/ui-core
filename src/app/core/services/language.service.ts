import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root"
})
export class LanguageService {
  constructor(private translateService: TranslateService) {}
  private langs = ["en", "fa"];

  setLanguage(lang) {
    window.localStorage.setItem("LANGUAGE", lang);
  }
  getLanguage() {
    return window.localStorage.getItem("LANGUAGE");
  }

  initLanguage() {
    // let browserlang = this.translateService.getBrowserLang();
    // if (this.langs.indexOf(browserlang) > -1) {
    //   this.translateService.setDefaultLang(browserlang);
    //   this.setLanguage(browserlang);
    // } else {
    //   this.translateService.setDefaultLang("fa");
    //   this.setLanguage("fa");
    // }
    this.translateService.setDefaultLang("fa");
    this.setLanguage("fa");
  }

  changeLanguage(lang) {
    if (this.langs.indexOf(lang) > -1) {
      this.translateService.setDefaultLang(lang);
      this.setLanguage(lang);
    }
  }
}
