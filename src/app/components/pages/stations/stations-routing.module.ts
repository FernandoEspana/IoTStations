import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationsComponent } from './stations.component';
import { AuthGuard } from 'src/app/core/sevices/auth.guard';

const routes: Routes = [
  { path: '', 
    component: StationsComponent,
    canActivate: [ AuthGuard ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationsRoutingModule { }
