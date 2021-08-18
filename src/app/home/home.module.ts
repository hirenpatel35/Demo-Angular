import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsHomeComponent } from './events-home/events-home.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    EventsHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
 // exports:[EventsHomeComponent]
})
export class HomeModule { }
