import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';


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
  telefono: any;
  categoria: string;

  constructor(private alertController: AlertController) {
    this.nombre = "";
    this.edad = null;
    this.genero = "";
    this.estado = "";
    this.ciudad = "";
    this.fechaN = new Date();
    this.correo = "";
    this.telefono = null;
    this.categoria = "";
  }

  async addTask(form: NgForm){
    const alert = await this.alertController.create({
      header: 'Registro exitoso',
      message: 'Gracias por registrarte en nuestra plataforma',
      buttons: ['OK']
    });

    await alert.present();
    form.reset();
  }

}
