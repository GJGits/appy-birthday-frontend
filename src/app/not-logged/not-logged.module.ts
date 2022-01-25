import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DummyComponentsModule } from '../dummy-components/dummy-components.module';
import { ServicesModule } from '../services/services.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    DummyComponentsModule,
    ServicesModule
  ]
})
export class NotLoggedModule { }
