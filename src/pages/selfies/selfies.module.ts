import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelfiesPage } from './selfies';

@NgModule({
  declarations: [
    SelfiesPage,
  ],
  imports: [
    IonicPageModule.forChild(SelfiesPage),
  ],
})
export class SelfiesPageModule {}
