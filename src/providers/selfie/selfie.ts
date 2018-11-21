import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SelfieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SelfieProvider {

  URL = "https://seminfo.herokuapp.com/api/selfies"

  constructor(public http: Http) {
    
  }

  list() {
    return new Promise((resolve, reject) => {
      this.http.get(this.URL).map(res => res.json()).subscribe(data => {
        console.log(Object.keys(data.selfies).map(key => data.selfies[key]));
        resolve(Object.keys(data.selfies).map(key => data.selfies[key]));
      });
    });
  }

  like(selfie){
    return new Promise(resolve => {
      this.http.post(this.URL + "/" + selfie.id + '/like', {}).subscribe(data => {
        resolve(data);
      }, error => {
        console.log("Oooops!");
      });
    });
  }

  add(selfie){
    return new Promise(resolve => {
      this.http.post('https://seminfo.herokuapp.com/api/selfies', selfie).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });
  }

}
