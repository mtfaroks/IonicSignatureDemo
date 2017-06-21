import { SelectedPlace } from '../model/place.model';

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class PlacesService {
    private places: SelectedPlace[] = [];

    constructor(public storage: Storage) { }

    addPlace(place: SelectedPlace) {
        this.places.push(place);
        this.storage.set('places', this.places);
    }

    getPlaces() {
        return this.storage.get('places')
            .then(
            (places) => {
                this.places = places == null ? [] : places;
                return this.places.slice();
            }
            );
    }
}
