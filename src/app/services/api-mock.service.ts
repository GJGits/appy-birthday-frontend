import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HTTPBasicResponse } from '../interfaces/http-responses/http-basic-response';
import { Voto } from '../interfaces/punteggi/voto';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiMockService implements ApiServiceService {

  baseDatiVoti: Voto[] = [];

  constructor() { }
  
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

  getVoti(): Observable<Voto[]> {
    return of(this.baseDatiVoti);
  }

}
