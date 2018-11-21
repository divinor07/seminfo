import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  constructor(public http: Http) {
    
  }

  list() {
    return new Promise((resolve, reject) => {
      this.http.get("https://seminfo.herokuapp.com/api/events").map(res => res.json()).subscribe(data => {
        resolve(data.events);
      }, error => {
        console.log("Oooops!");
      });
    });
  }

  like(event){
    return new Promise(resolve => {
      this.http.post('https://seminfo.herokuapp.com/api/events/' + event.id + '/like', {}).subscribe(data => {
        resolve(data);
      }, error => {
        console.log("Oooops!");
      });
    });
  }

}
