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
  ["jess",   "../../assets/jessica.jpeg"],
  ["Framas", "../../assets/francesca.jpeg"],
  ["Schifhofedo",  "../../assets/federico.jpeg"],
  ["piccirai",   "../../assets/alessia.jpeg"],
  ["piccimediaset",    "../../assets/donato.jpeg"],
  ["Giulia Rubik",  "../../assets/giulia.jpeg"],
  ["Pizzibarbaro", "../../assets/pizzibarbaro.png"]
]);

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor() { }

  isLoggedIn = false;
  nomeLoggato = "";

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
