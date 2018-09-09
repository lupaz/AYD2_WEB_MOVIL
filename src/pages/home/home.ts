import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { CatedraticosPage } from '../catedraticos/catedraticos';

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
    this.navCtrl.push(CatedraticosPage);
  }

  registrar(){
    this.navCtrl.push(RegistroPage);
  }

}
