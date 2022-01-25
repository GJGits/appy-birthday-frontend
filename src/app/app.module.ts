import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyComponentsModule } from './dummy-components/dummy-components.module';
import { LoggeddRoutingModule } from './logged/logged-routing.module';
import { LoggedModule } from './logged/logged.module';
import { NotLoggedRoutingModule } from './not-logged/not-logged-routing';
import { NotLoggedModule } from './not-logged/not-logged.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggeddRoutingModule,
    LoggedModule,
    NotLoggedRoutingModule,
    NotLoggedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
