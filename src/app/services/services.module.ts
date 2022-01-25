import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';
import { environment } from 'src/environments/environment';
import { ApiProdService } from './api-prod.service';
import { ApiMockService } from './api-mock.service';

export function apiFactory(): ApiServiceService {
  switch(environment.production){
    case true: {return new ApiProdService()}
    default: {return new ApiMockService()}
  }
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [{
    provide: ApiServiceService,
    useFactory: apiFactory,
  }]
})
export class ServicesModule { }
