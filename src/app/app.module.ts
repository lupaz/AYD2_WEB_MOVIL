import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { RestProvider } from '../providers/rest/rest';
import { CatedraticosPage } from '../pages/catedraticos/catedraticos';
import { TabsPage } from '../pages/tabs/tabs';
import { PerfilPage } from'../pages/perfil/perfil';
import { BuscarPage } from '../pages/buscar/buscar';
import { CatedraticoPage } from '../pages/catedratico/catedratico';
import { CalificarPage } from '../pages/calificar/calificar';
import { ResultadosPage } from '../pages/resultados/resultados';
import { RestExtProvider } from '../providers/rest-ext/rest-ext';


@NgModule({
  declarations: [
    MyApp,
    HomePage,RegistroPage,CatedraticosPage,TabsPage,PerfilPage,BuscarPage,CatedraticoPage,CalificarPage,ResultadosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,RegistroPage,CatedraticosPage,TabsPage,PerfilPage,BuscarPage,CatedraticoPage,CalificarPage,ResultadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    RestExtProvider
  ]
})
export class AppModule {}
