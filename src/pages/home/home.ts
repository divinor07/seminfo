import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  palestras;

  constructor(public navCtrl: NavController, public http: Http) {
    this.get().then((data) => {
      this.palestras = data;
    })
  }

  get() {
    return new Promise((resolve, reject) => {
      this.http.get("https://seminfo.herokuapp.com/api/events").map(res => res.json()).subscribe(data => {
        resolve(data.events);
      });
    });
  }

  up_like(palestra) {
    palestra.likes++;
  }

}
