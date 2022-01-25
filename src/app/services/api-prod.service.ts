import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiProdService implements ApiServiceService {

  constructor() { }

  sendVoti(voti: any[]) {
    throw new Error('Method sendVoti Prod not implemented.');
  }

  getVoti(): Observable<any[]> {
    throw new Error('Method getVoti Prod not implemented.');
  }
}
