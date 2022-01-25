import { HttpClient } from '@angular/common/http';
import { Injectable, ɵresetJitOptions } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

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
}
