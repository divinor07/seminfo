import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { NovaSelfiePage } from '../nova-selfie/nova-selfie';

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
    private modalCtrl: ModalController, private toastCtrl: ToastController) {
    let loading = this.loadingCtrl.create({
      content: 'Espere...',
      spinner: 'crescent'
    });

    loading.present();

    this.get().then((data) => {
      this.selfies = data;
      loading.dismiss();
    });
  }

  get() {
    return new Promise((resolve, reject) => {
      this.http.get("https://seminfo.herokuapp.com/api/selfies").map(res => res.json()).subscribe(data => {
        console.log(Object.keys(data.selfies).map(key => data.selfies[key]));
        resolve(Object.keys(data.selfies).map(key => data.selfies[key]));
      });
    });
  }

  up_like(selfie) {
    let loading = this.loadingCtrl.create({
      content: 'Espere...',
      spinner: 'crescent'
    });

    loading.present();
    return new Promise(resolve => {
      this.http.post('https://seminfo.herokuapp.com/api/selfies/' + selfie.id + '/like', {}).subscribe(data => {
        resolve(data);
        selfie.likes++;
        loading.dismiss();
      }, error => {
        console.log("Oooops!");
      });
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
