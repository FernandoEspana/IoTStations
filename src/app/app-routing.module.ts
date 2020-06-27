import { StationComponent } from './components/station/station.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'stations',
    loadChildren: () => import('./components/pages/stations/stations.module').then(m => m.StationsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'station/:id', component: StationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
