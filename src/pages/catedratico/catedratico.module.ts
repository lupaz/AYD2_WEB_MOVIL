import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatedraticoPage } from './catedratico';

@NgModule({
  declarations: [
    CatedraticoPage,
  ],
  imports: [
    IonicPageModule.forChild(CatedraticoPage),
  ],
})
export class CatedraticoPageModule {}
