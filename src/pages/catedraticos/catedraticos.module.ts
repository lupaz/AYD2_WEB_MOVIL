import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatedraticosPage } from './catedraticos';

@NgModule({
  declarations: [
    CatedraticosPage,
  ],
  imports: [
    IonicPageModule.forChild(CatedraticosPage),
  ],
})
export class CatedraticosPageModule {}
