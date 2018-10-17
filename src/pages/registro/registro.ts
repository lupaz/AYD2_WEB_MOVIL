import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  myForm: FormGroup;
  respuesta:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider:RestProvider, public fb: FormBuilder,public alertCtrl: AlertController) {
    this.myForm = this.fb.group({
        nombre: ['', [Validators.required]] ,
        apellido: ['', [Validators.required]] ,
        contrasena: ['', [Validators.required]],
        cui: ['', [Validators.required]],
        carnet: ['', [Validators.required]],
        carrera: ['', [Validators.required]]
    });
    
  }
  
  //data = {nombre :'',contrasena:'',edad:'',carnet:'',correo:''}

  creaRegistro(){
    //console.log("Registro al usuario.");
      this.restProvider.addUsuario(this.myForm.value)
      .then(res => {
        this.respuesta=res;
        console.log(this.respuesta.status);
        
        if(this.respuesta.status === "success"){
          this.showAlert("Registro Exitoso","¡Excelente!, gracias por registrarte.");
        }else{
          this.showAlert("Registro Erroneo","¡upps :(!, algo salio mal, intenta mas tarde.");
        }
        this.navCtrl.push(HomePage);
      });
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
