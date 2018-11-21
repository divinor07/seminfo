import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http } from '@angular/http';
import { SelfieProvider } from '../../providers/selfie/selfie';

/**
 * Generated class for the NovaSelfiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-selfie',
  templateUrl: 'nova-selfie.html',
})
export class NovaSelfiePage {

  selfie;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private toastCtrl: ToastController, 
    private loadingCtrl: LoadingController, public http: Http, private viewCtrl: ViewController, public selfieProvider: SelfieProvider) {
    this.selfie = {
      'img': '',
      'depoimento': ''
    }
  }

  tirar_foto() {
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.selfie.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  add(){
    let loading = this.loadingCtrl.create({
      content: 'Espere...',
      spinner: 'crescent'
    });

    loading.present();
    this.selfie.likes = 0;
    this.selfieProvider.add(this.selfie).then((data) => {
      loading.dismiss();
      this.viewCtrl.dismiss();
    }).catch((error) => {
      loading.dismiss();
      console.log("Error");
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaSelfiePage');
  }

}
