import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inp-btn',
  templateUrl: './inp-btn.component.html',
  styleUrls: ['./inp-btn.component.css']
})
export class InpBtnComponent implements OnInit {

  @Input() inputPlaceholder : string = "";
  @Input() secret : string = "";
  @Input() errore : string = "";
  @Output() continua = new EventEmitter<string>();

  text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.continua.emit(this.text);
  }

}
