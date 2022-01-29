import { Component, OnInit } from '@angular/core';
import { HTTPBasicResponse } from 'src/app/interfaces/http-responses/http-basic-response';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LogInService, private apiService: ApiServiceService) {
  }

  game: string = 'brain';

  ngOnInit(): void {
  }

  showGame(game: string) {
    this.game = game;
  }


}
