import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoadingController } from 'ionic-angular';
import { CatedraticoPage } from '../catedratico/catedratico'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider:RestProvider,public loadingCtrl: LoadingController ){
    this.getDocentes();  
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Cargando...",
      duration: 500
    });
    loader.present();
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

  getCatedratico(docente){
    this.navCtrl.push(CatedraticoPage,{ docente:docente});
  }

}
