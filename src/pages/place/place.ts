import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class Place {

  lat:number;
  lng:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl : ViewController) {
    this.lat = this.navParams.data.location.lat;
    this.lng = this.navParams.data.location.lng;
  }

  onDismiss(){
    this.viewCtrl.dismiss();
  }
}
