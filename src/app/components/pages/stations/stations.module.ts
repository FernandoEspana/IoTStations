import { SharedModule } from './../../../shared/shared.module';
import { MaterialModule } from './../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsRoutingModule } from './stations-routing.module';
import { StationsComponent } from './stations.component';


@NgModule({
  declarations: [StationsComponent],
  imports: [
    CommonModule,
    StationsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class StationsModule { }
