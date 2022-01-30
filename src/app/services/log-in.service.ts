import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Crendenziali } from './credenziali';

const credenziali: Crendenziali[] = [
  {name: "nachos", password: "umegghiu"},
  {name: "jessica", password: "a"},
  {name: "francesca", password: "a"},
  {name: "federico", password: "a"},
  {name: "alessia", password: "b" },
  {name: "donato", password: "b"}
]

const userImagePath = new Map<string,string>([
  ["nachos",    "../../assets/marco_serata.jpg"],
  ["jessica",   "../../assets/marco_serata.jpg"],
  ["francesca", "../../assets/marco_serata.jpg"],
  ["federico",  "../../assets/marco_serata.jpg"],
  ["alessia",   "../../assets/marco_serata.jpg"],
  ["donato",    "../../assets/marco_serata.jpg"]
]);

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor() { }

  isLoggedIn = false;
  nomeLoggato = "";
  //credenziali$ = new BehaviorSubject<any[]>(credenziali);

  getLoggedUsername() {
    return this.nomeLoggato;
  }

  getUserImagePath(userName: string) {
    return userImagePath.get(userName);
  }

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

}
