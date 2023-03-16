/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlarmasRecuperarContrasenaComponent } from './alarmas-recuperarContrasena.component';

describe('AlarmasRecuperarContrasenaComponent', () => {
  let component: AlarmasRecuperarContrasenaComponent;
  let fixture: ComponentFixture<AlarmasRecuperarContrasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmasRecuperarContrasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmasRecuperarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
