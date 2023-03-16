import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmasHomeComponent } from './alarmas-home/alarmas-home.component';
import { AlarmasHeaderComponent } from './alarmas-header/alarmas-header.component';
import { AlarmasLoginComponent } from './alarmas-login/alarmas-login.component';
import { AlarmasSignupComponent } from './alarmas-signup/alarmas-signup.component';
import { AlarmasRecuperarContrasenaComponent } from './alarmas-recuperarContrasena/alarmas-recuperarContrasena.component';
import { AlarmasFinalizaRecuperarContrasenaComponent } from './alarmas-finalizaRecuperarContrasena/alarmas-finalizaRecuperarContrasena.component';
import { AlarmasPrincipalComponent } from './alarmas-principal/alarmas-principal.component';
import { AlarmasGestionComponent } from './alarmas-gestion/alarmas-gestion.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    NgxMaterialTimepickerModule
  ],
  declarations: [
      AlarmasHomeComponent,
      AlarmasHeaderComponent,
      AlarmasLoginComponent,
      AlarmasSignupComponent,
      AlarmasRecuperarContrasenaComponent,
      AlarmasFinalizaRecuperarContrasenaComponent,
      AlarmasPrincipalComponent,
      AlarmasGestionComponent
    ],
  exports: [
    AlarmasHomeComponent,
    AlarmasLoginComponent,
    AlarmasSignupComponent,
    AlarmasRecuperarContrasenaComponent,
    AlarmasFinalizaRecuperarContrasenaComponent,
    AlarmasPrincipalComponent,
    AlarmasGestionComponent
  ]
})
export class AlarmasModule { }
