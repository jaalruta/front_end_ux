import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
declare var window: any;
@Component({
  selector: 'app-alarmas-principal',
  templateUrl: './alarmas-principal.component.html',
  styleUrls: ['./alarmas-principal.component.css']
})
export class AlarmasPrincipalComponent implements OnInit {
  eliminarModal: any;
  constructor(
    private toastr: ToastrService

  ) { }

  ngOnInit() {

    this.eliminarModal = new window.bootstrap.Modal(
      document.getElementById('modalEliminar')
    );
  }

  inicioEliminar(){
    this.eliminarModal.show();
  }

  eliminaAlarma(){
    this.eliminarModal.hide();
    this.toastr.success('Alarma Eliminada', 'Proceso Correcto',{closeButton:true});
  }
}
