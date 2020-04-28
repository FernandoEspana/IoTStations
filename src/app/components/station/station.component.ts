import { environment } from './../../../environments/environment';
import { StationI } from './../../shared/models/StationI';
import { StationsService } from './../../core/stations.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  estacion: StationI;
  mapa: Mapboxgl.Map;


  constructor(private activatedRoute: ActivatedRoute, private stationsService: StationsService) {
    this.activatedRoute.params.subscribe( params => {
      console.log(params.id);
      this.estacion = this.stationsService.getStation(params.id);
      console.log(this.estacion);

    });
   }

  ngOnInit() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container del mapa en html del componente
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.estacion.lon, this.estacion.lat], // starting position
      zoom: 9 // starting zoom
    });

    this.crearMarcador(this.estacion.lon, this.estacion.lat);
  }

  crearMarcador(lon: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: false
    }).setLngLat([lon, lat])
      .addTo(this.mapa);
  }

}
