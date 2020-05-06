import { StationI } from './../../shared/models/StationI';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

    private dbPath = '/stations';
    stationsRef: AngularFireList<StationI> = null;
  constructor(private db: AngularFireDatabase) {
    this.stationsRef = db.list(this.dbPath, ref => ref.orderByChild('id'));
  }

   createStations(station: StationI): void  {
      this.stationsRef.push(station);
   }

   getStationsList(): AngularFireList<StationI> {
     return this.stationsRef;
   }
 }
