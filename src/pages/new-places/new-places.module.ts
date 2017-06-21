import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPlaces } from './new-places';

@NgModule({
  declarations: [
    NewPlaces,
  ],
  imports: [
    IonicPageModule.forChild(NewPlaces),
  ],
  exports: [
    NewPlaces
  ]
})
export class NewPlacesModule {}
