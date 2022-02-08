import { Component, Input, OnInit } from '@angular/core';
import { Partecipante } from 'src/app/interfaces/partecipanti/partecipante';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-lista-partecipanti',
  templateUrl: './lista-partecipanti.component.html',
  styleUrls: ['./lista-partecipanti.component.css']
})
export class ListaPartecipantiComponent implements OnInit {

  @Input() partecipanti: Partecipante[] | null = [];

  constructor(private loginService: LogInService) { }

  ngOnInit(): void {
  }

  getUserImage(userName: string) {
    return this.loginService.getUserImagePath(userName);
  }

}
