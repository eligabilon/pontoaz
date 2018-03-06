import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPisComponent } from './buscar-pis.component';

describe('BuscarPisComponent', () => {
  let component: BuscarPisComponent;
  let fixture: ComponentFixture<BuscarPisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
