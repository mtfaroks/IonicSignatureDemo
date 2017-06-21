import { PlacesService } from '../../services/places.services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-new-places',
  templateUrl: 'new-places.html',
})
export class NewPlaces {



  location : {lat : number, lng : number} = {lat:0,lng:0};

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public placesServices:PlacesService,
  public geoLocation:Geolocation) {
  }

  onAddPlace(value:{title:string}){
    this.placesServices.addPlace({title : value.title, location : this.location})
    this.navCtrl.pop();
  }

  onLocateUser(){
    this.geoLocation.getCurrentPosition()
      .then(
        (location) => {
          console.log("Location Fetched Successfully")
          this.location.lat = location.coords.latitude;
          this.location.lng = location.coords.longitude;
        }
      )
      .catch(
        (error) => console.log("an Error Occured")
      );
  }
}
