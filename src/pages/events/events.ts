import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController,
    public eventProvider: EventProvider) {
    let loading = this.loadingCtrl.create({
      content: 'Espere...',
      spinner: 'crescent'
    });

    loading.present();

    this.eventProvider.list().then((data) => {
      this.palestras = data;
      loading.dismiss();
    }).catch((error) => {
      loading.dismiss();
      console.log("Error");
    });
  }

  up_like(palestra) {
    let loading = this.loadingCtrl.create({
      content: 'Espere...',
      spinner: 'crescent'
    });

    loading.present();
    this.eventProvider.like(palestra).then((data) => {
      palestra.likes++;
      loading.dismiss();
    }).catch((error) => {
      loading.dismiss();
      console.log("Error");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
