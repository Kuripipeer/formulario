import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre : string;
  edad : any;
  genero: string;
  estado: string;
  ciudad: string;
  fechaN: Date;
  correo: string;
  telefono: string;
  categoria: string;

  constructor() {
    this.nombre = "";
    this.edad = null;
    this.genero = "";
    this.estado = "";
    this.ciudad = "";
    this.fechaN = new Date();
    this.correo = "";
    this.telefono = "";
    this.categoria = "";
  }

  addTask(){

  }

}
