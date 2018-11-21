import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SelfieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SelfieProvider {

  constructor(public http: Http) {
    
  }

  list() {
    return new Promise((resolve, reject) => {
      this.http.get("https://seminfo.herokuapp.com/api/selfies").map(res => res.json()).subscribe(data => {
        console.log(Object.keys(data.selfies).map(key => data.selfies[key]));
        resolve(Object.keys(data.selfies).map(key => data.selfies[key]));
      });
    });
  }

  like(selfie){
    return new Promise(resolve => {
      this.http.post('https://seminfo.herokuapp.com/api/selfies/' + selfie.id + '/like', {}).subscribe(data => {
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
