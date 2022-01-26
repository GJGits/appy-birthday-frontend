import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HTTPBasicResponse } from "../interfaces/http-responses/http-basic-response";
import { Voto } from "../interfaces/punteggi/voto";

export abstract class ApiServiceService {

  abstract sendVoti(voti: Voto[]): Observable<HTTPBasicResponse>;
  abstract getVoti(): Observable<Voto[]>;
}
