import { Injectable } from '@angular/core';
import { StationI } from '../shared/models/StationI';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  estaciones: StationI [] =
   [  {
        id: '001',
        bat: 50,
        hum: 55,
        lat: 1.211588,
        lon: -77.284210,
        ping: 33,
        pot: -40,
        state: true,
        temp: 23
        },
        {
        id: '002',
        bat: 33,
        hum: 55,
        lat: 1.211588,
        lon: -77.284210,
        ping: 66,
        pot: -50,
        state: true,
        temp: 22,
       },
       {
         bat: 50,
         hum: 55,
         lat: 1.235678,
         lon: -77.284210,
         ping: 66,
         pot: -50,
         state: false,
         temp: 35,
         id: '003',
      },
      {
        bat: 90,
        hum: 35,
        lat: 1.235678,
        lon: -77.284210,
        ping: 52,
        pot: -32,
        state: true,
        temp: 17,
        id: '004',
     }
    ];
  constructor() {
    console.log('Servicio de estaciones listo para usar');
   }

   getStations(): StationI[] {
     return this.estaciones;
   }

   getStation(id: string) {
     for (const estacion of this.estaciones) {
       if (estacion.id === id) {
         return estacion;
       }
     }
     return null;
   }
}
