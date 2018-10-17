import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  
  /*searchMovies(movieName) {
    var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }*/

  //apiUrl = 'http://35.224.130.227/AYD2_BACKEND/api_movil';
  apiUrl = 'http://api.catedraticos/api_movil';
  getDocentes() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/get_catedraticos').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCursos(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/get_cursos', this.getFormData(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          console.log(err);
        });
    });
  }

  addUsuario(data) {
    //console.log("jajajaja"+JSON.stringify(data));
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/add_estudiante', this.getFormData(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          console.log(err);
        });
    });
  }

  login(data) {
    //console.log("jajajaja"+JSON.stringify(data));
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/login_user', this.getFormData(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          console.log(err);
        });
    });
  }

  getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }

}
