import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventRegisterComponent } from './event-register/event-register.component';
import { RouteGuardService } from '../route-guard.service';


const routes: Routes = [
  {
    path: "",
    component: EventsListComponent,
    canActivate:[RouteGuardService]
  },
  {
    path: "new",
    component: EventRegisterComponent,
    canActivate:[RouteGuardService]
  },
  {
    path: ":eventId",
    component: EventsDetailsComponent,
    canActivate:[RouteGuardService]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EventsRoutingModule { }


