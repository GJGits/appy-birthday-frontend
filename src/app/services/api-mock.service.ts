import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HTTPBasicResponse } from '../interfaces/http-responses/http-basic-response';
import { Partecipante } from '../interfaces/partecipanti/partecipante';
import { Voto } from '../interfaces/punteggi/voto';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiMockService implements ApiServiceService {

  baseDatiVoti: Voto[] = [
    {name: "nachos", game: "brain", score: 0},
    {name: "nachos", game: "drink", score: 0},
    {name: "nachos", game: "cards", score: 0},
    {name: "jessica", game: "brain", score: 0},
    {name: "jessica", game: "drink", score: 0},
    {name: "jessica", game: "cards", score: 0},
    {name: "francesca", game: "brain", score: 0},
    {name: "francesca", game: "drink", score: 0},
    {name: "francesca", game: "cards", score: 0},
    {name: "federico", game: "brain", score: 0},
    {name: "federico", game: "drink", score: 0},
    {name: "federico", game: "cards", score: 0},
    {name: "alessia", game: "brain", score: 0},
    {name: "alessia", game: "drink", score: 0},
    {name: "alessia", game: "cards", score: 0},
    {name: "donato", game: "brain", score: 0},
    {name: "donato", game: "drink", score: 0},
    {name: "donato", game: "cards", score: 0}
  ];

  baseDatiPartecipanti: Partecipante[] = [
    {name: "nachos"},
    {name: "jessica"},
    {name: "francesca"},
    {name: "federico"},
    {name: "alessia"},
    {name: "donato"}
  ];

  baseDatiGameNames: string[] = [
    "brain",
    "drink",
    "cards"
  ];

  constructor() { }
  
  getGameNames(): Observable<string[]> {
    return of(this.baseDatiGameNames);
  }
  
  sendVoti(voti: Voto[]): Observable<HTTPBasicResponse> {
    for (let i = 0; i < voti.length; i++) {
      let nuovoVoto: Voto = voti[i];
      let votoDbIndex = this.baseDatiVoti.findIndex((voto:Voto) => voto.name === nuovoVoto.name && voto.game === nuovoVoto.game);
      if (votoDbIndex !== -1) {
        this.baseDatiVoti[votoDbIndex].score += nuovoVoto.score;
      } else {
        this.baseDatiVoti.push(nuovoVoto);
      }
    }
    return of({status: 200});
  }

  getPunteggi(game: string): Observable<Voto[]> {
    return of(this.baseDatiVoti.filter((voto) => voto.game === game));
  }

  getPartecipanti(): Observable<Partecipante[]> {
    return of(this.baseDatiPartecipanti)
  }

}
