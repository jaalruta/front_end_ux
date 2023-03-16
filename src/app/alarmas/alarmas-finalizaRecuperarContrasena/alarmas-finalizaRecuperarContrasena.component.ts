import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var window: any;
@Component({
  selector: 'app-alarmas-finalizaRecuperarContrasena',
  templateUrl: './alarmas-finalizaRecuperarContrasena.component.html',
  styleUrls: ['./alarmas-finalizaRecuperarContrasena.component.css']
})
export class AlarmasFinalizaRecuperarContrasenaComponent implements OnInit {
  formModal: any;
  constructor(
    private routerPath: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('modalConfirmacionFinaliza')
    );
    var a = document.getElementById("modalConfirmacionFinaliza");
    a!.addEventListener("hidden.bs.modal", ()=>{
      this.routerPath.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.routerPath.navigate(['/login']));
    });
  }

  finalizaRecuperacion(){

    this.formModal.show();

  }

}
