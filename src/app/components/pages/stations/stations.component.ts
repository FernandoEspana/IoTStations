import { StationsService } from './../../../core/stations.service';
import { Component, OnInit } from '@angular/core';
import { StationI } from 'src/app/shared/models/StationI';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {
  estaciones: StationI[];

  constructor(private stationsService: StationsService, private router: Router) {

  }

  ngOnInit() {
    this.estaciones = this.stationsService.getStations();
    console.log(this.estaciones);
  }

  seeStation(id: string) {
    this.router.navigate(['station', id]);

  }

}
