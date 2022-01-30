import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, Subject } from 'rxjs';
import { HTTPBasicResponse } from '../interfaces/http-responses/http-basic-response';
import { Voto } from '../interfaces/punteggi/voto';
import { ApiServiceService } from './api-service.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  
  private gameVoteStatus = new Map<string, BehaviorSubject<boolean>>();

  constructor(private apiService: ApiServiceService) { 
    this.apiService.getGameNames().subscribe((gameNames: string[]) => {
      gameNames.forEach((gameName) => {
        this.gameVoteStatus.set(gameName, new BehaviorSubject<boolean>(true));
      })
    });
  }

  sendVoti(gameName: string, voti: Voto[]): Observable<HTTPBasicResponse> {
    this.disabilitaVotoGioco(gameName);
    this.schedulaAbilitazioneVotoGioco(gameName);
    return this.apiService.sendVoti(voti);
  }

  getPunteggi(gameName: string): Observable<Voto[]> {
    return this.apiService.getPunteggi(gameName);
  }

  disabilitaVotoGioco(gameName: string) {
    this.gameVoteStatus.get(gameName)?.next(false);
  }

  schedulaAbilitazioneVotoGioco(gameName: string) {
    let gameSubject = this.gameVoteStatus.get(gameName);
    let delayedObservable = gameSubject?.pipe(delay(30000));
    delayedObservable?.subscribe(() => {gameSubject?.next(true)});
    
  }

  getAbilitazione(gameName: string): Observable<boolean> | undefined{
    return this.gameVoteStatus.get(gameName)?.asObservable();
  }

}
