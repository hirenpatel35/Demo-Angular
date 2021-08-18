import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from '../services/events.service';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  providers: [EventsService]
})
export class EventsListComponent implements OnInit, OnDestroy {

  constructor(private _eventsService: EventsService, private _router: Router) { }

  public eventId: number;
  public fieldName: string = "eventName";
  public orderBy: string = "asc";
  public events: Event[];
  private _eventsServiceSubscription: Subscription;
  //private _token:string;

  eventTrackBy(index, event) {
    return event.EventId;
  }

  syncEvent() {

    this._eventsServiceSubscription = this._eventsService.getAllEvents().subscribe(
      data => this.events = data,
      error => console.error(error),
      () => console.log("Service  Completed")
    );

  }

  ngOnInit(): void {
    this.syncEvent();
  }

  public onEventSelection(eventId: number): void {
    console.log(eventId)
    this.eventId = eventId
  }

  public sortingEvents(value: string): void {

    if (this.fieldName != value) {
      this.orderBy = "asc";
    } else {
      if (this.orderBy == "asc")
        this.orderBy = "desc";
      else
        this.orderBy = "asc";
    }
    this.fieldName = value;
  }

  ngOnDestroy(): void {
    if (this._eventsServiceSubscription) {
      this._eventsServiceSubscription.unsubscribe();
    }
  }

}
