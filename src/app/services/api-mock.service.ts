import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HTTPBasicResponse } from '../interfaces/http-responses/http-basic-response';
import { Partecipante } from '../interfaces/partecipanti/partecipante';
import { Game } from '../interfaces/punteggi/game';
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
    {name: "nachos", game: "dance", score: 0},
    {name: "nachos", game: "style", score: 0},
    {name: "jessss", game: "brain", score: 0},
    {name: "jessss", game: "drink", score: 0},
    {name: "jessss", game: "cards", score: 0},
    {name: "jessss", game: "dance", score: 0},
    {name: "jessss", game: "style", score: 0},
    {name: "Framas", game: "brain", score: 0},
    {name: "Framas", game: "drink", score: 0},
    {name: "Framas", game: "cards", score: 0},
    {name: "Framas", game: "dance", score: 0},
    {name: "Framas", game: "style", score: 0},
    {name: "Schifhofedo", game: "brain", score: 0},
    {name: "Schifhofedo", game: "drink", score: 0},
    {name: "Schifhofedo", game: "cards", score: 0},
    {name: "Schifhofedo", game: "dance", score: 0},
    {name: "Schifhofedo", game: "style", score: 0},
    {name: "piccirai", game: "brain", score: 0},
    {name: "piccirai", game: "drink", score: 0},
    {name: "piccirai", game: "cards", score: 0},
    {name: "piccirai", game: "dance", score: 0},
    {name: "piccirai", game: "style", score: 0},
    {name: "piccimediaset", game: "brain", score: 0},
    {name: "piccimediaset", game: "drink", score: 0},
    {name: "piccimediaset", game: "cards", score: 0},
    {name: "piccimediaset", game: "dance", score: 0},
    {name: "piccimediaset", game: "style", score: 0},
    {name: "Pizzibarbaro", game: "brain", score: 0},
    {name: "Pizzibarbaro", game: "drink", score: 0},
    {name: "Pizzibarbaro", game: "cards", score: 0},
    {name: "Pizzibarbaro", game: "dance", score: 0},
    {name: "Pizzibarbaro", game: "style", score: 0},
    {name: "Giulia Rubik", game: "brain", score: 0},
    {name: "Giulia Rubik", game: "drink", score: 0},
    {name: "Giulia Rubik", game: "cards", score: 0},
    {name: "Giulia Rubik", game: "dance", score: 0},
    {name: "Giulia Rubik", game: "style", score: 0}
  ];

  baseDatiPartecipanti: Partecipante[] = [
    {name: "nachos"},
    {name: "jessss"},
    {name: "Framas"},
    {name: "Schifhofedo"},
    {name: "piccirai"},
    {name: "piccimediaset"},
    {name: "Pizzibarbaro"},
    {name: "Giulia Rubik"},
  ];

  baseDatiGameNames: Game[] = [
    {name: "brain"},
    {name: "drink"},
    {name: "cards"},
    {name: "dance"},
    {name: "style"}
  ];

  constructor() { }
  
  getGameNames(): Observable<Game[]> {
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
