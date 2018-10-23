import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { RestExtProvider } from '../../providers/rest-ext/rest-ext';
import { CatedraticoPage } from '../catedratico/catedratico'


/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  items: any;
  curso:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider:RestProvider, public restExtProvider:RestExtProvider) {
    this.curso=false;
  }

  
  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if ( val.trim() !== '') {
      var aux= parseInt(val,10);
      if(!isNaN(aux)){ //validamos que es un codigo de curso
        this.curso=true;
        var data=this.restExtProvider.getCursoWS(aux);
        this.items = data;
        //.then(data=>{
        //console.log(data);
        //});
        /*var data={'codigo':aux}
        this.restProvider.searchCurso(data)
        .then(data => {
          this.items = data;
        });*/
      }else{//validamos que es un nombre
        this.curso=false;
        var data2={'nombre':val}
        this.restProvider.searchDocente(data2)
        .then(data2 => {
          this.items = data2;
        });
      }      
    }
  }

  getCatedratico(docente){
    this.navCtrl.push(CatedraticoPage,{docente:docente});
  }
  
}
