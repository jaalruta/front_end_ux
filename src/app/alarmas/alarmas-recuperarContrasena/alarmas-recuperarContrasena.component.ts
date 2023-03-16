import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var window: any;
@Component({
  selector: 'app-alarmas-recuperarContrasena',
  templateUrl: './alarmas-recuperarContrasena.component.html',
  styleUrls: ['./alarmas-recuperarContrasena.component.css']
})
export class AlarmasRecuperarContrasenaComponent implements OnInit {
  formModal: any;
  constructor(
    private routerPath: Router,
    private router: ActivatedRoute

  ) { }

  ngOnInit() {


    this.formModal = new window.bootstrap.Modal(
      document.getElementById('modalConfirmacion')
    );

  }

  iniciaConfirmacion(){
    this.formModal.show();
  }

  finalizaConfirmacion(){
    this.formModal.hide();
    this.routerPath.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.routerPath.navigate(['/recoverEnd']));

  }

}
