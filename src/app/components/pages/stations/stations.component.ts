import { StationsService } from '../../../core/sevices/stations.service';
import { Component, OnInit } from '@angular/core';
import { StationI } from 'src/app/shared/models/StationI';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';
import { AuthService } from '../../../core/sevices/auth.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {
  estaciones: StationI[];

  constructor(private stationsService: StationsService,
              private aService: AuthService, 
              private router: Router) {

  }

  ngOnInit() {
    
    this.getStationList();
    }

  getStationList() {
    this.stationsService.getStationsList().snapshotChanges().pipe(
      map( changes =>
        changes.map( c =>
          ({key: c.payload.key, ...c.payload.val()})
          )
         )
     ).subscribe( stations => {
       this.estaciones = stations;
     });
  }
  seeStation(id: number) {
    console.log(this.estaciones);
    this.router.navigate(['station', id]);
  }

  logout() {
    this.aService.logout().
      then( () => {
        this.router.navigate(['./home'])
      });
    
  }

}
