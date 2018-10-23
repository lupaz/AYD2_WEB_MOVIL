import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';

import { RestProvider } from '../../providers/rest/rest';
import { RestExtProvider} from '../../providers/rest-ext/rest-ext';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  respuesta:any;
  tmp:any;
  myForm: FormGroup;

  constructor(public navCtrl: NavController,public storage:Storage,public restProvider:RestProvider, public fb: FormBuilder,public alertCtrl: AlertController, public restExtProvider:RestExtProvider) {
    this.myForm = this.fb.group({
      carnet: ['', [Validators.required]],
      contrasena: ['', [Validators.required]]
    });
  }

  ingresar(){
    this.restExtProvider.validarEstudiante(this.myForm.value.carnet+"@ingenieria.usac.edu.gt")
    .then(data => {
      this.tmp= data;
      //console.log(this.tmp);
      if(this.tmp.message === "true"){
        this.restProvider.login(this.myForm.value)
        .then(res => {
          this.respuesta= res; 
          //this.navCtrl.setRoot(TabsPage);
          console.log(this.respuesta);
          if(this.respuesta.status === "failed"){
            this.showAlert("Error","Carnet ó Contraseña incorrecta.");
          }else{ 
            this.storage.set('nombre', this.respuesta[0].nombre);
            this.storage.set('apellido',this.respuesta[0].apellido);
            this.storage.set('carnet',this.respuesta[0].carnet);
            this.storage.set('cui',this.respuesta[0].cui);
            this.storage.set('fecha',this.respuesta[0].fecha_nac);
            this.showAlert("Correcto","Bienvenido "+this.respuesta[0].nombre);
            this.navCtrl.setRoot(TabsPage);
          }/**/
        });
      }else{
        this.showAlert("Autenticación Invalida","El usuario no se encuntra registrado oficialmente en la facultad de ingeniería");
      }  //*/
    });    
  }


  registrar(){
    this.navCtrl.push(RegistroPage);
  }

  showAlert( titulo:string,mensaje:string ) {
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['Aceptar']
    });
    alert.present();
  }



}
