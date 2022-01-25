import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Crendenziali } from './credenziali';

const credenziali: Crendenziali[] = [
  {name: "nachos", password: "umegghiu", imgPath: "../../assets/marco_serata.jpg", brain: 0, drink: 0, cards: 0},
  {name: "jessica", password: "a", imgPath: "../../assets/marco_serata.jpg",brain: 0, drink: 1, cards: 0},
  {name: "francesca", password: "a" , imgPath: "../../assets/marco_serata.jpg", brain: 100, drink: 0, cards: 0},
  {name: "federico", password: "a" , imgPath: "../../assets/marco_serata.jpg", brain: 0, drink: 0, cards: 7},
  {name: "alessia", password: "b" , imgPath: "../../assets/marco_serata.jpg", brain: 0, drink: 3, cards: 0},
  {name: "donato", password: "b" , imgPath: "../../assets/marco_serata.jpg", brain: 0, drink: 0, cards: 5}
]

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor() { }

  isLoggedIn = false;
  nomeLoggato = "";
  credenziali$ = new BehaviorSubject<any[]>(credenziali);

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

  checkUser(name: string) {
    for (let element of credenziali) {
      if (element.name === name) {
        return true;
      }
    }
    return false;
  }

  logIn(name: string, password: string) {
    for (let element of credenziali) {
      if (element.name === name && element.password === password) {
        this.isLoggedIn = true;
        this.nomeLoggato = element.name;
        return true;
      }
    }
    this.nomeLoggato = "";
    this.isLoggedIn = false;
    return false;
  }

  getCredenziali() {return this.credenziali$;}

  updateVoti(data: any[]) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < credenziali.length; j++) {
        if (credenziali[j].name === data[i].name) {
          let game = data[i].game;
          if (game === "brain") {
            credenziali[j].brain = data[i].score;
          }
          if (game === "drink") {
            credenziali[j].drink = data[i].score;
          }
          if (game === "cards") {
            credenziali[j].cards = data[i].score;
          }
        }
      }
    }
  }

}
