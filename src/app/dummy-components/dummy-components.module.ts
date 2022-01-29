import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InpBtnComponent } from './inp-btn/inp-btn.component';
import { FormsModule } from '@angular/forms';
import { ListaPartecipantiComponent } from './lista-partecipanti/lista-partecipanti.component';



@NgModule({
  declarations: [
    InpBtnComponent,
    ListaPartecipantiComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InpBtnComponent,
    ListaPartecipantiComponent
  ]
})
export class DummyComponentsModule { }
