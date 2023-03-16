import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var window: any;
@Component({
  selector: 'app-alarmas-login',
  templateUrl: './alarmas-login.component.html',
  styleUrls: ['./alarmas-login.component.css']
})
export class AlarmasLoginComponent implements OnInit {

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute
  )
  { }

  ngOnInit() {
  }

  iniciarSesion()
  {
    this.routerPath.navigate(['/main']);
  }
}
