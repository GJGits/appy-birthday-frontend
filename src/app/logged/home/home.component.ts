import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  credenziali;
  utentiSelezionatiPerVoto: string[] = [];
  votoAbilitato = true;

  constructor(private loginService: LogInService, private apiService: ApiServiceService) {
    this.credenziali = loginService.getCredenziali();
    this.refreshVoti();
  }

  game: string = 'brain';

  ngOnInit(): void {
  }

  showGame(game: string) {
    this.game = game;
  }

  onClickUtente(nomeUtente: string) {
    if (nomeUtente !== this.loginService.nomeLoggato) {
      if (this.utentiSelezionatiPerVoto.includes(nomeUtente)) {
        this.utentiSelezionatiPerVoto = this.utentiSelezionatiPerVoto.filter(nome => nome !== nomeUtente)
      } else {
        this.utentiSelezionatiPerVoto.push(nomeUtente);
      }

    }

  }

  onVota() {
    let voti = [];
    for (let i = 0; i < this.utentiSelezionatiPerVoto.length; i++) {
      voti.push({ name: this.utentiSelezionatiPerVoto[i], game: this.game, score: 1 });
    }
    this.apiService.sendVoti(voti).subscribe((data: any[]) => {
      this.utentiSelezionatiPerVoto = [];
      this.refreshVoti();
      this.votoAbilitato = false;
      setTimeout(() => { this.votoAbilitato = true; }, 30000);
      this.apiService.getVoti().subscribe((data) => {
      })
    })

  }

  riabilitaVoto() {
    this.votoAbilitato = true;
    console.log(this.votoAbilitato);
  }

  refreshVoti() {
    this.apiService.getVoti().subscribe((data) => {
      this.loginService.updateVoti(data);
    })
  }

}
