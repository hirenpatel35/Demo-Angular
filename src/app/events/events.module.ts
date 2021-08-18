import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { SortingPipe } from './pipes/sorting.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EventsService } from './services/events.service';
import { EventRegisterComponent } from './event-register/event-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [
    EventsListComponent,
    EventsDetailsComponent,
    SortingPipe,
    EventRegisterComponent,
  ],
  imports: [
    CommonModule,
   // HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    EventsRoutingModule

  ],
  exports: [EventsListComponent],
  providers: [EventsService]

})
export class EventsModule { }
