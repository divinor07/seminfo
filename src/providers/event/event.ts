import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  URL = "https://seminfo.herokuapp.com/api/events"

  constructor(public http: Http) {
    
  }

  list() {
    return new Promise((resolve, reject) => {
      this.http.get(this.URL).map(res => res.json()).subscribe(data => {
        resolve(data.events);
      }, error => {
        console.log("Oooops!");
      });
    });
  }

  like(event){
    return new Promise(resolve => {
      this.http.post(this.URL + "/" + event.id + '/like', {}).subscribe(data => {
        resolve(data);
      }, error => {
        console.log("Oooops!");
      });
    });
  }

}
