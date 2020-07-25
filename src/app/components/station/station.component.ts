import { environment } from './../../../environments/environment';
import { StationI } from './../../shared/models/StationI';
import { StationsService } from '../../core/sevices/stations.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import * as Mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  estacion: StationI = {
    bat: 0,
    hum: 0,
    id: 1,
    lat: 0,
    lon: 0,
    ping: 33,
    pot: 0,
    state: false,
    temp: 0,
    time: 0
  };
  idStation: number;
  mapa: Mapboxgl.Map;
    
  constructor(private activatedRoute: ActivatedRoute, 
              private stationsService: StationsService) {
    this.activatedRoute.params.subscribe( params => {
      this.idStation = params.id;
      this.getStationById(this.idStation);
    });
    
  }

  ngOnInit() {
   
   
  }

  crearMarcador(lon: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: false
    }).setLngLat([lon, lat])
      .addTo(this.mapa);
  }

  getStationById(id: number) {
    this.stationsService.getStationsList().snapshotChanges().pipe(
      map( changes =>
        changes.map( c =>
          ({key: c.payload.key, ... c.payload.val()})
          )
        )
    ).subscribe( stations => {
       this.estacion = stations[id - 1];
       this.drawMap();
       this.crearMarcador(this.estacion.lon, this.estacion.lat);
       console.log(this.estacion);
    });
  }

  drawMap() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container del mapa en html del componente
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.estacion.lon, this.estacion.lat], // starting position
      zoom: 9 // starting zoom
    });
  }
}
