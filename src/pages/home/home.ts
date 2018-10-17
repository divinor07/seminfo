import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  palestras;

  constructor(public navCtrl: NavController) {
    this.palestras = [
      {
        'img': 'assets/imgs/logo.png',
        'autor': 'Professor X',
        'descricao': '...',
        'likes': '7'
      },
      {
        'img': '',
        'autor': '',
        'descricao': '',
        'likes': ''
      }]

  }

  up_like(palestra){
    palestra.likes++;
  }

}
