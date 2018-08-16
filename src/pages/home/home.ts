import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario:String;
  pass:String;

  constructor(public navCtrl: NavController) {

  }

  ingresar(){
    console.log("Usuario: "+this.usuario);
    console.log("Contaseña: "+this.pass);
  }

  registrar(){
    this.navCtrl.push(RegistroPage);
  }

}
