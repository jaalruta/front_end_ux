/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlarmasFinalizaRecuperarContrasenaComponent } from './alarmas-finalizaRecuperarContrasena.component';

describe('AlarmasFinalizaRecuperarContrasenaComponent', () => {
  let component: AlarmasFinalizaRecuperarContrasenaComponent;
  let fixture: ComponentFixture<AlarmasFinalizaRecuperarContrasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmasFinalizaRecuperarContrasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmasFinalizaRecuperarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
