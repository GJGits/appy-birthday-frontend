import { Component, Input, OnInit } from '@angular/core';
import { Partecipante } from 'src/app/interfaces/partecipanti/partecipante';

@Component({
  selector: 'app-lista-partecipanti',
  templateUrl: './lista-partecipanti.component.html',
  styleUrls: ['./lista-partecipanti.component.css']
})
export class ListaPartecipantiComponent implements OnInit {

  @Input() partecipanti: Partecipante[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
