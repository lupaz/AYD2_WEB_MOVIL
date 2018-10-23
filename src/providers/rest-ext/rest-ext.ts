import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestExtProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestExtProvider {

  res: string;
  readonly URL_WS_JAVA = 'http://35.197.30.148:8080/AyD2F3/WebServiceCurso?wsdl';

  constructor(public http: HttpClient) {
    //sconsole.log('Hello RestExtProvider Provider');
  }

  getCursoWS(cod_curso) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', this.URL_WS_JAVA, false);
    xhr.onreadystatechange = (() => {
      if (xhr.readyState === 4) {
        this.res = '[';
        const xmlResponse = xhr.responseXML.documentElement;
        const fullNodeList = xmlResponse.getElementsByTagName('return');
        for (let i = 0; i < fullNodeList.length; i++) {
          const eachnode = new Option();
          this.res += '{';
          for (let j = 0; j < 3; j++) {
            eachnode.text = fullNodeList[i].childNodes[j].nodeName;
            eachnode.value = fullNodeList[i].childNodes[j].textContent;
            if (j === 2) {
              this.res += '"' + eachnode.text + '": ' + '"' + eachnode.value + '"';
            } else {
              this.res += '"' + eachnode.text + '": ' + '"' + eachnode.value + '",';
            }
          }
          if (i === (fullNodeList.length - 1)) {
            this.res += '}';
          } else {
            this.res += '},';
          }
        }
        this.res += ']';
      }
    });
    xhr.setRequestHeader('Content-Type', 'text/xml');
    const xml = '<?xml version="1.0" encoding="utf-8"?>' +
    '<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" ' +
                    'xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
      '<SOAP-ENV:Header/> ' +
      '<S:Body> ' +
      '<ns2:buscarCurso_Id xmlns:ns2="http://WebServiceCurso/">'+
            '<id_curso>'+cod_curso+'</id_curso>'+
        '</ns2:buscarCurso_Id>'+
      '</S:Body> ' +
    '</S:Envelope>';
    xhr.send(xml);
    return JSON.parse(this.res);
  }

  apiUrl = 'http://18.222.214.0:3000/api/usuarios/';

  validarEstudiante(datos){
    let headers = new HttpHeaders()
            .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjIwMTMzMTMyNEBpbmdlbmllcmlhLnVzYWMuZWR1Lmd0IiwiZXhwIjoxNTQwODU4NjEyLCJpYXQiOjE1NDAyNTM4MTJ9.SRA6QAIRYnbe7sKqN8STm4_2ne9KGMTTz8azmNhSdmE");

    return new Promise(resolve => {
      this.http.get(this.apiUrl+datos,{headers}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
