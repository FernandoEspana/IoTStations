import { StationI } from './../../shared/models/StationI';
import { StationsService } from './../../core/stations.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  estacion: StationI;
  constructor(private activatedRoute: ActivatedRoute, private stationsService: StationsService) {
    this.activatedRoute.params.subscribe( params => {
      console.log(params.id);
      this.estacion = this.stationsService.getStation(params.id);
      console.log(this.estacion);
    });
   }

  ngOnInit() {
  }

}
