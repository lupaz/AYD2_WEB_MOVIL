import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the CatedraticosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catedraticos',
  templateUrl: 'catedraticos.html',
})
export class CatedraticosPage {

  docentes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider:RestProvider ){
      this.getDocentes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatedraticosPage');
  }

  getDocentes() {
    this.restProvider.getDocentes()
    .then(data => {
      this.docentes = data;
      console.log(this.docentes);
    });
  }

}
