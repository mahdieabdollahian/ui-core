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
import { ActivatedRoute, Router } from "@angular/router";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig = {
      "Cache-Control": "no-cache, no-store",
      "Content-Type": "application/json",
      Accept: "application/json"
    };

    const csrtToken = this.jwtService.getToken();

    if (csrtToken) {
      headersConfig["x-csrf-token"] = `${csrtToken}`;
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401 || err.status === 403) {
          window.location.href = "/logout";
        } else if (err.status === 426) {
          this.router.navigateByUrl("/changePass");
        }
        return throwError(err);
      })
    );
  }
}
