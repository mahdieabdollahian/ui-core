import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${environment.api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  getTextFile(path: string): Observable<any> {
    return this.http
      .get(`${environment.api_url}${path}`, { responseType: "text" })
      .pipe(catchError(this.formatErrors));
  }
  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}/update`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }
  request(
    type: string,
    path: string,
    body: Object,
    query: string
  ): Observable<any> {
    if (type == "post") {
      return this.http
        .post(`${path}${query}`, body, { observe: "response" })
        .pipe(catchError(this.formatErrors));
    } else if (type == "get") {
      return this.http
        .get(`${path}${query}`)
        .pipe(catchError(this.formatErrors));
    }
  }

  delete(path, id): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}/delete/${id}`, null)
      .pipe(catchError(this.formatErrors));
  }
}
