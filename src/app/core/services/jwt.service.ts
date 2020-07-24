import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class JwtService {
  constructor() {}

  getToken(): String {
    return window.sessionStorage["jwtToken"];
  }

  setToken(token: String) {
    window.sessionStorage["jwtToken"] = token;
  }
}
