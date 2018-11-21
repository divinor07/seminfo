import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { SelfiesPage } from '../selfies/selfies';
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  exibir_selfies() {
    this.navCtrl.push(SelfiesPage);
  }

  exibir_eventos() {
    this.navCtrl.push(EventsPage);
  }

}
