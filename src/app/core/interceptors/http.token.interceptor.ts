import { Injectable, Injector } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { JwtService } from "../services";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { LanguageService } from "./../services";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private jwtService: JwtService,
    private router: Router,
    private languageService: LanguageService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig = {
      "Cache-Control": "no-cache, no-store",
      "Content-Type": "application/json",
      Accept: "*/*"
    };

    const csrtToken = this.jwtService.getToken();

    if (csrtToken) {
      headersConfig["x-csrf-token"] = `${csrtToken}`;
    }
    headersConfig["Accept-Language"] = this.languageService.getLanguage();

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401 || err.status === 403) {
          // window.location.href = "/logout";
        } else if (err.status === 426) {
          this.router.navigateByUrl("/changePass");
        }
        return throwError(err);
      })
    );
  }
}
