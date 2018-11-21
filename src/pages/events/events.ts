import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  palestras;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private loadingCtrl: LoadingController) {
    let loading = this.loadingCtrl.create({
      content: 'Espere...',
      spinner: 'crescent'
    });

    loading.present();

    this.get().then((data) => {
      this.palestras = data;
      loading.dismiss();
    });
  }

  get() {
    return new Promise((resolve, reject) => {
      this.http.get("https://seminfo.herokuapp.com/api/events").map(res => res.json()).subscribe(data => {
        resolve(data.events);
      });
    });
  }

  up_like(palestra) {
    let loading = this.loadingCtrl.create({
      content: 'Espere...',
      spinner: 'crescent'
    });

    loading.present();
    return new Promise(resolve => {
      this.http.post('https://seminfo.herokuapp.com/api/events/' + palestra.id + '/like', {}).subscribe(data => {
        resolve(data);
        palestra.likes++;
        loading.dismiss();
      }, error => {
        console.log("Oooops!");
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
