import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPBasicResponse } from '../interfaces/http-responses/http-basic-response';
import { Voto } from '../interfaces/punteggi/voto';
import { ApiServiceService } from './api-service.service';


@Injectable({
  providedIn: 'root'
})
export class ApiProdService implements ApiServiceService {

  baseURL = "http://127.0.0.1:3000";

  constructor(private http: HttpClient) { }

  sendVoti(voti: Voto[]): Observable<HTTPBasicResponse> {
    return this.http.post<HTTPBasicResponse>(this.baseURL + "/voti", voti);
  }

  getVoti(): Observable<Voto[]> {
    return this.http.get<Voto[]>(this.baseURL + "/voti");
  }
}
