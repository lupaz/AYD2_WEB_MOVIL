import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  datos:any = { nombre:'User ',apellido:'Uno', fecha:'2000-01-01',carnet:'20000000',cui:'101010101'}; 

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    this.storage.get('nombre').then((nombre)=>{
      this.datos.nombre=nombre;
    });
    
    this.storage.get('apellido').then((val)=>{
      this.datos.apellido=val;
    });
    this.storage.get('cui').then((cui)=>{
      this.datos.cui=cui;
    });

    this.storage.get('fecha').then((fecha)=>{
      this.datos.fecha=fecha;
    });

    this.storage.get('carnet').then((carnet)=>{
      this.datos.carnet=carnet;
    });
  }
  
}


