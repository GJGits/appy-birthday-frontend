import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HTTPBasicResponse } from 'src/app/interfaces/http-responses/http-basic-response';
import { Voto } from 'src/app/interfaces/punteggi/voto';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { GameService } from 'src/app/services/game.service';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() gameName: string = "";

  punteggi$: Observable<Voto[]> | undefined;
  voti = new Map<string, Voto>([]);
  votoAbilitato$: Observable<boolean> | undefined;
  regoleVoto: string = "Le regole sono molto semplici, ogni utente può votare tutti gli utenti tranne se stesso. In seguito ad " + 
  "ogni voto l'utente dovrà aspettare un periodo di tempo prima di poter votare nuovamente. " +
  "Per selezionare un utente da votare cliccare sulla sua immagine, per annullare il voto ricliccare. Il voto" +
  "è annullabile solo prima di votare. Che vinca il migliore.";
  regoleGioco: string | undefined= "";

constructor(private gameService: GameService, private apiService: ApiServiceService, private loginService: LogInService) {
}

ngOnInit(): void {
  this.punteggi$ = this.apiService.getPunteggi(this.gameName);
  this.votoAbilitato$ = this.gameService.getAbilitazione(this.gameName);
  this.regoleGioco = this.gameService.getRegoleGioco(this.gameName);
}

getUserImage(userName: string) {
  return this.loginService.getUserImagePath(userName);
}

toggleVoto(userName: string) {
  if (this.loginService.getLoggedUsername() !== userName) {
    if (this.voti.has(userName)) {
      this.voti.delete(userName);
    } else {
      this.voti.set(userName, { name: userName, game: this.gameName, score: 1 });
    }
  }

}

isUtenteSelezionato(username: string) {
  return this.voti.has(username);
}

onVota() {
  this.gameService.sendVoti(this.gameName, Array.from(this.voti.values())).subscribe((response: HTTPBasicResponse) => {
    this.voti.clear();
    this.punteggi$ = this.gameService.getPunteggi(this.gameName);
  });

}

showVotoInfo() {
  alert(this.regoleVoto);
}

}
