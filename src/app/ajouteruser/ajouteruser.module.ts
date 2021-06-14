import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouteruserPageRoutingModule } from './ajouteruser-routing.module';

import { AjouteruserPage } from './ajouteruser.page';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouteruserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AjouteruserPage]
})
export class AjouteruserPageModule {}
