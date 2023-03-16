import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var window: any;
@Component({
  selector: 'app-alarmas-gestion',
  templateUrl: './alarmas-gestion.component.html',
  styleUrls: ['./alarmas-gestion.component.css']
})
export class AlarmasGestionComponent implements OnInit {

  clasificacionModal: any;
  ubicacionModal: any;
  iotInicioModal: any;
  iotAccionModal: any;
  creacionModal: any;
  accion: string;
  texto_titulo : string;
  texto_boton : string;
  texto_mensaje : string;

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService
  ) {

    this.accion = "Crear";
    this.texto_titulo = "Crear Alarma";
    this.texto_boton = "Crear Alarma";
    this.texto_mensaje = "Alarma creada correctamente";

  }

  ngOnInit() {


    this.clasificacionModal = new window.bootstrap.Modal(
      document.getElementById('modalClasificacion')
    );

    this.ubicacionModal = new window.bootstrap.Modal(
      document.getElementById('modalUbicacion')
    );

    this.iotInicioModal = new window.bootstrap.Modal(
      document.getElementById('modalIOTdispositivo')
    );

    this.iotAccionModal = new window.bootstrap.Modal(
      document.getElementById('modalIOTaccion')
    );

    this.creacionModal = new window.bootstrap.Modal(
      document.getElementById('modalCreacionFinaliza')
    );


    var a = document.getElementById("modalCreacionFinaliza");
    a!.addEventListener("hidden.bs.modal", ()=>{
      this.routerPath.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.routerPath.navigate(['/main']));
    });

    if(history.state.accion)
    {
      if(history.state.accion=="editar")
      {
        this.accion = "Editar";
        this.texto_titulo = "Editar Alarma";
        this.texto_boton = "Editar Alarma";
        this.texto_mensaje = "Alarma Editada correctamente";
      }
    }

  }

  generarRango(cantidad:number){
    return Array.from(Array(cantidad).keys()).map(x => x + 1);
  }

  crearUbicacion()
  {
    this.ubicacionModal.show()
  }

  finalizaUbicacion()
  {
    this.ubicacionModal.hide()
  }

  crearClasificacion()
  {
    this.clasificacionModal.show()
  }

  finalizaClasificacion()
  {
    this.clasificacionModal.hide()
    this.toastr.success('Clasificación Creada', 'Proceso Correcto',{closeButton:true});
  }

  crearInteraccion()
  {
    this.iotInicioModal.show()
  }

  iotAcciones()
  {
    this.iotInicioModal.hide()
    this.iotAccionModal.show()
  }

  iotFinalizar(){
    this.iotAccionModal.hide()
    this.toastr.success('Interacción creada correctamente', 'Proceso Correcto',{closeButton:true});
  }

  gestionAlarma(){
    this.creacionModal.show();
  }


}
