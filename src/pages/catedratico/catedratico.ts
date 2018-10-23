import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {CalificarPage} from '../calificar/calificar';
import {ResultadosPage} from '../resultados/resultados'
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CatedraticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catedratico',
  templateUrl: 'catedratico.html',
})
export class CatedraticoPage {
  docente:any;
  cursos:any;
  calificacion:any;
  promedio:any;
  carnet:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider:RestProvider,public storage:Storage) {
    this.storage.get('carnet').then((carnet)=>{ 
      this.carnet = carnet;
    });

    this.docente = this.navParams.get('docente');
    this.getCursos();
    this.getcalificacion();
  }

  getCursos(){
     var data={'id_personal':this.docente.id_personal}
     this.restProvider.getCursos(data)
    .then(data => {
      this.cursos = data;
      console.log(this.cursos);
    });
  }

  getcalificacion(){
    var data={'id_personal':this.docente.id_personal}
     this.restProvider.getCalificacion(data)
    .then(data => {
      this.calificacion = data;
      var total = parseInt(this.calificacion[0].promedio,10);
      this.promedio=total;
      //console.log(this.promedio);
    });     
  }

  calificar(){
    this.navCtrl.push(CalificarPage,{id_personal:this.docente.id_personal,carnet:this.carnet});
  }

  getResultados(){
    this.navCtrl.push(ResultadosPage,{docente:this.docente,calificacion:this.calificacion});
  }

  

}
