import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from '../route-guard.service';

import { EventsHomeComponent } from './events-home/events-home.component';


const routes: Routes = [
  {
    path: "",
    component: EventsHomeComponent,
    canActivate:[RouteGuardService]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class HomeRoutingModule { }


