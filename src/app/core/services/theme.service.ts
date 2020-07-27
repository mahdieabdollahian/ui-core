import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ThemeService {
  setColors(colors) {
    this.setTheme(colors);
  }

  setDirection(language) {
    let direction = language == "fa" ? "rtl" : "ltr";
    document.documentElement.style.setProperty("--direction", direction);
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach((k) =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
