import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CalificarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calificar',
  templateUrl: 'calificar.html',
})
export class CalificarPage {

  puntualidad: number = 0;
  dominio: number = 0;
  respeto: number = 0;
  didactica: number =0;
  responsable: number =0;
  comentario:string="";
  id_personal:any;
  id:any;
  respuesta:any;
  creado:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider:RestProvider,public alertCtrl: AlertController) {
    this.id_personal = this.navParams.get('id_personal');
    this.id = this.navParams.get('carnet');
    this.getCalificacion();
  }


  getCalificacion(){
    var data={'carnet':this.id,'id_personal':this.id_personal}
    //console.log('personal = '+this.id_personal + "  carnet = "+this.id);
    this.restProvider.calificacion(data)
   .then(data => {
      this.respuesta=data;
      if(this.respuesta.status !== "success"){
        this.respeto = this.respuesta[0].respeto;
        this.didactica = this.respuesta[0].didactica;
        this.dominio = this.respuesta[0].dominiotema;
        this.puntualidad =this.respuesta[0].puntualidad;
        this.responsable = this.respuesta[0].responsabilidad;
        this.comentario = this.respuesta[0].comentario;
        this.creado=true;
      }
     // console.log(data);
   });    
  }

  updateCalificacion(){
    console.log("llamo a updateCali");
    var data={'carnet':this.id,'id_personal':this.id_personal,'dominio':this.dominio,
              'puntualidad':this.puntualidad, 'responsabilidad':this.responsable,
              'respeto':this.respeto, 'didactica':this.didactica,'comentario':this.comentario  
            }
    //console.log('personal = '+this.id_personal + "  carnet = "+this.id);
    this.restProvider.updateCalificacion(data)
    .then(data => {
      this.showAlert("Gracias","Calificacion realizada.");
      this.navCtrl.pop();
      //console.log(data);
    });   
  }

  setCalificacion(){
    console.log("llamo a setCali");
    var data={'carnet':this.id,'id_personal':this.id_personal,'dominio':this.dominio,
              'puntualidad':this.puntualidad, 'responsabilidad':this.responsable,
              'respeto':this.respeto, 'didactica':this.didactica,'comentario':this.comentario  
            }
    //console.log('personal = '+this.id_personal + "  carnet = "+this.id);
    this.restProvider.setCalificacion(data)
    .then(data => {
      this.showAlert("Gracias","Calificacion realizada.");
      this.navCtrl.pop();
      //console.log(data);
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
