import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InpBtnComponent } from './inp-btn/inp-btn.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InpBtnComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InpBtnComponent
  ]
})
export class DummyComponentsModule { }
