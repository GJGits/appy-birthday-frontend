import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, Subject } from 'rxjs';
import { HTTPBasicResponse } from '../interfaces/http-responses/http-basic-response';
import { Game } from '../interfaces/punteggi/game';
import { Voto } from '../interfaces/punteggi/voto';
import { ApiServiceService } from './api-service.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  
  private gameVoteStatus = new Map<string, BehaviorSubject<boolean>>();

  private regoleGioco = new Map<string, string>([
    ["brain", "Leggi la domanda che trovi sulla carta, vota chiunque risponda correttamente."],
    ["drink", "Assicurati di vederci ancora bene poi vota chiunque vedi bere."],
    ["cards", "Vota chiunque vinca una mano ad un qualsiasi gioco con le carte, la sua fortuna va certificata."],
    ["dance", "Vota tutti i partecipanti appena gli vedi fare una crazy move."],
    ["style", "Ogni qual volta guarderai un partecipante e ti dimenticherai di che anno è sai cosa fare."]
  ]);

  constructor(private apiService: ApiServiceService) { 
    this.apiService.getGameNames().subscribe((games: Game[]) => {
      games.forEach((game) => {
        this.gameVoteStatus.set(game.name, new BehaviorSubject<boolean>(true));
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
    let timeToWait = (Math.floor(Math.random() * (120 - 30 + 1) + 30)) * 1000;
    let delayedObservable = gameSubject?.pipe(delay(timeToWait));
    delayedObservable?.subscribe(() => {gameSubject?.next(true)});
    
  }

  getAbilitazione(gameName: string): Observable<boolean> | undefined{
    return this.gameVoteStatus.get(gameName)?.asObservable();
  }

  getRegoleGioco(game: string): string | undefined {
    return this.regoleGioco.get(game);
  }

}
