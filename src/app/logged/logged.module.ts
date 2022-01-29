import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';



@NgModule({
  declarations: [
    HomeComponent,
    GameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent]
})
export class LoggedModule { }
