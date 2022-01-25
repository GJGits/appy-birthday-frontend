import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export abstract class ApiServiceService {

  abstract sendVoti(voti: any[]): any;
  abstract getVoti(): Observable<any[]>;

  /*
  baseURL = "http://127.0.0.1:3000";
  constructor(private http: HttpClient) { }

  sendVoti(voti: any[]) {
    return this.http.post<string>(
      this.baseURL + "/voti",
      voti
    );
  }

  getVoti() {
    return this.http.get<any[]>(this.baseURL + "/voti");
  }
  */
}
