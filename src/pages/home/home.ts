import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  palestra;

  constructor(public navCtrl: NavController) {
    this.palestra = {
      'img': '',
      'autor': '',
      'descricao': '',
      'likes': ''
    }

  }

}
