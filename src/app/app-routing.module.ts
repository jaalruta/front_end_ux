import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmasHomeComponent } from './alarmas/alarmas-home/alarmas-home.component';
import { AlarmasLoginComponent } from './alarmas/alarmas-login/alarmas-login.component';
import { AlarmasSignupComponent } from './alarmas/alarmas-signup/alarmas-signup.component';
import { AlarmasRecuperarContrasenaComponent } from './alarmas/alarmas-recuperarContrasena/alarmas-recuperarContrasena.component';
import { AlarmasFinalizaRecuperarContrasenaComponent } from './alarmas/alarmas-finalizaRecuperarContrasena/alarmas-finalizaRecuperarContrasena.component';
import { AlarmasPrincipalComponent } from './alarmas/alarmas-principal/alarmas-principal.component';
import { AlarmasGestionComponent } from './alarmas/alarmas-gestion/alarmas-gestion.component';
const routes: Routes = [
  {
    path: '',
    component: AlarmasHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AlarmasLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: AlarmasSignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'recover',
    component: AlarmasRecuperarContrasenaComponent,
    pathMatch: 'full'
  },
  {
    path: 'recoverEnd',
    component: AlarmasFinalizaRecuperarContrasenaComponent,
    pathMatch: 'full'
  }
  ,
  {
    path: 'main',
    component: AlarmasPrincipalComponent,
    pathMatch: 'full'
  }
  ,
  {
    path: 'gestionAlarma',
    component: AlarmasGestionComponent,
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
