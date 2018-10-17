import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider:RestProvider) {
    this.docente = this.navParams.get('docente');
    this.getCursos();
  }



  getCursos(){
     var data={'id_personal':this.docente.id_personal}
     this.restProvider.getCursos(data)
    .then(data => {
      this.cursos = data;
      console.log(this.cursos);
    });
  }

}
