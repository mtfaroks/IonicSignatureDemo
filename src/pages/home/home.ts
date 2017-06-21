import { PlacesService } from '../../services/places.services';
import { NewPlaces } from '../new-places/new-places';
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Place } from "../place/place";
import { SelectedPlace } from "../../model/place.model"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places : {title:string}[] = [];
  constructor(public navCtrl: NavController,
  public placesService:PlacesService,
  public modalCtrl:ModalController) { }

  ionViewWillEnter(){
    this.placesService.getPlaces().then(
      (places) => this.places = places
    );
  }

  gotoAddNewPlaces(){
    this.navCtrl.push(NewPlaces);
  }

  onOpenPlace(place:SelectedPlace){
    this.modalCtrl.create(Place,place).present();
  }
}
