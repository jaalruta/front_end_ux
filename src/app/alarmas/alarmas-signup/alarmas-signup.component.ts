import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var window: any;
@Component({
  selector: 'app-alarmas-signup',
  templateUrl: './alarmas-signup.component.html',
  styleUrls: ['./alarmas-signup.component.css']
})
export class AlarmasSignupComponent implements OnInit {

  formModal: any;
  constructor(
    private routerPath: Router,
    private router: ActivatedRoute

  ) { }

  ngOnInit() {

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('modalConfirmacion')
    );
    var a = document.getElementById("modalConfirmacion");
    a!.addEventListener("hidden.bs.modal", ()=>{
      this.routerPath.navigate(['/login'])
    });

  }


  signup(){

    this.formModal.show();

  }

}
