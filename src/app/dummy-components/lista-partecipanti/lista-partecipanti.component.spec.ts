import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPartecipantiComponent } from './lista-partecipanti.component';

describe('ListaPartecipantiComponent', () => {
  let component: ListaPartecipantiComponent;
  let fixture: ComponentFixture<ListaPartecipantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPartecipantiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPartecipantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
