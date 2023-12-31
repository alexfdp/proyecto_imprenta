import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncargadoRoutingModule } from './encargado-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    EncargadoRoutingModule,
    SharedModule
  ]
})
export class EncargadoModule { }
