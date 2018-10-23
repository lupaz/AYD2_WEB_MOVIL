import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

  docente:any;
  calificacion:any;
  dominio:any;
  respeto:any;
  responsable:any;
  puntual:any;
  didactica:any;
  comentarios:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider:RestProvider) {
    this.docente = this.navParams.get('docente');
    this.calificacion = this.navParams.get('calificacion');
    this.puntual = parseInt(this.calificacion[0].puntual,10);
    this.respeto = parseInt(this.calificacion[0].respeto,10);
    this.dominio = parseInt(this.calificacion[0].dominio,10);
    this.didactica = parseInt(this.calificacion[0].didacta,10);
    this.responsable = parseInt(this.calificacion[0].responsable,10);
    this.getComentarios();  
  }


  getComentarios(){
    var data={'id_personal':this.docente.id_personal}
      this.restProvider.getComentarios(data)
    .then(data => {
      this.comentarios = data;
      //console.log(this.comentarios);
    });

  }

}
