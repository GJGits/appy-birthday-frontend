import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiMockService implements ApiServiceService {

  constructor() { }
  
  sendVoti(voti: any[]) {
    throw new Error('Method sendVoti Mock not implemented.');
  }

  getVoti(): Observable<any[]> {
    throw new Error('Method getVoti Mock not implemented.');
  }

}
