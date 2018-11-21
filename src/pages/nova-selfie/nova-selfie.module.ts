import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaSelfiePage } from './nova-selfie';

@NgModule({
  declarations: [
    NovaSelfiePage,
  ],
  imports: [
    IonicPageModule.forChild(NovaSelfiePage),
  ],
})
export class NovaSelfiePageModule {}
