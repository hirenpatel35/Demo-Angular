import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./security/security.module").then(m => m.SecurityModule).catch(err => console.log(err))
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule).catch(err => console.log(err))
  },
  {
    path: "events",
    loadChildren: () => import("./events/events.module").then(m => m.EventsModule).catch(err => console.log(err))
  },
  {
    path: "employees",
    loadChildren: () => import("./employees/employees.module").then(m => m.EmployeesModule).catch(err => console.log(err))
  },

  {
    path: "userposts",
    loadChildren: () => import("./jph/jph.module").then(m => m.JphModule).catch(err => console.log(err))

  },
  {
    path: "auth",
    loadChildren: () => import("./security/security.module").then(m => m.SecurityModule).catch(err => console.log(err))
  },

  // {
  //   path: "events/:eventId",
  //   component: EventsDetailsComponent,
  // },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


