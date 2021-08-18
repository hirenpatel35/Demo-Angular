import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from '../route-guard.service';

import { JphUserPostsComponent } from './jph-user-posts/jph-user-posts.component';


const routes: Routes = [
  {
    path: "",
    component: JphUserPostsComponent,
    canActivate:[RouteGuardService]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class JphRoutingModule { }


