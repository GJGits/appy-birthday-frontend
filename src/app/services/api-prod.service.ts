import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPBasicResponse } from '../interfaces/http-responses/http-basic-response';
import { Partecipante } from '../interfaces/partecipanti/partecipante';
import { Game } from '../interfaces/punteggi/game';
import { Voto } from '../interfaces/punteggi/voto';
import { ApiServiceService } from './api-service.service';


@Injectable({
  providedIn: 'root'
})
export class ApiProdService implements ApiServiceService {

  baseURL = "http://192.168.1.210:3000";

  constructor(private http: HttpClient) { }
  
  getGameNames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseURL + "/games");
  }
  
  getPartecipanti(): Observable<Partecipante[]> {
    return this.http.get<Partecipante[]>(this.baseURL + "/partecipanti");
  }

  sendVoti(voti: Voto[]): Observable<HTTPBasicResponse> {
    return this.http.post<HTTPBasicResponse>(this.baseURL + "/voti", voti);
  }

  getPunteggi(game: string): Observable<Voto[]> {
    return this.http.get<Voto[]>(this.baseURL + "/punteggi/" + game);
  }


}
