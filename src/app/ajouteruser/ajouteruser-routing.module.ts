import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouteruserPage } from './ajouteruser.page';

const routes: Routes = [
  {
    path: '',
    component: AjouteruserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouteruserPageRoutingModule {}
