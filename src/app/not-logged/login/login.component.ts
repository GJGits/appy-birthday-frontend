import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Partecipante } from 'src/app/interfaces/partecipanti/partecipante';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string = '';
  nameError: string = '';
  passwordError: string = '';
  password: string = '';

  partecipanti: Observable<Partecipante[]>;

  constructor(private loginService: LogInService, private router: Router, private apiService: ApiServiceService) {
    this.partecipanti = this.apiService.getPartecipanti();
  }

  ngOnInit(): void {
  }

  onContinua(inputText: string) {
    if (!this.name || this.name === "") {
      this.name = inputText;
      if (!this.loginService.checkUser(this.name)) {
        this.name = "";
        this.nameError = "nome inserito non valido";
      }
    } else {
      this.password = inputText;
      if (this.loginService.logIn(this.name, this.password)) {
        this.nameError = "";
        this.passwordError = "";
         this.router.navigate(["home"]);
      } else {
        this.password = "";
        this.passwordError = "password inserita non valida";
      }
    }
  }

}
