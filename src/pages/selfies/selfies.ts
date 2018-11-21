import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { NovaSelfiePage } from '../nova-selfie/nova-selfie';
import { SelfieProvider } from '../../providers/selfie/selfie';

/**
 * Generated class for the SelfiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selfies',
  templateUrl: 'selfies.html',
})
export class SelfiesPage {

  selfies;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private loadingCtrl: LoadingController, 
    private modalCtrl: ModalController, public selfieProvider: SelfieProvider) {
    let loading = this.loadingCtrl.create({
      content: 'Espere...',
      spinner: 'crescent'
    });

    loading.present();

    this.selfieProvider.list().then((data) => {
      this.selfies = data;
      loading.dismiss();
    }).catch((error) => {
      loading.dismiss();
      console.log("Error");
    });
  }

  up_like(selfie) {
    let loading = this.loadingCtrl.create({
      content: 'Espere...',
      spinner: 'crescent'
    });

    loading.present();
    this.selfieProvider.like(selfie).then((data) => {
      selfie.likes++;
      loading.dismiss();
    }).catch((error) => {
      loading.dismiss();
      console.log("Error");
    });

  }

  nova_selfie_modal() {
    let profileModal = this.modalCtrl.create(NovaSelfiePage, {});
    profileModal.onDidDismiss(data => {
      //this.add(data.nova_selfie);
    });
    profileModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfiesPage');
  }

}
