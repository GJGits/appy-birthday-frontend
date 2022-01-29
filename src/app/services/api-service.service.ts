import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HTTPBasicResponse } from "../interfaces/http-responses/http-basic-response";
import { Partecipante } from "../interfaces/partecipanti/partecipante";
import { Voto } from "../interfaces/punteggi/voto";

export abstract class ApiServiceService {
  
  abstract getPartecipanti(): Observable<Partecipante[]>;
  abstract sendVoti(voti: Voto[]): Observable<HTTPBasicResponse>;
  abstract getPunteggi(game: string): Observable<Voto[]>;
}
