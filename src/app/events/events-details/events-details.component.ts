import { Component, OnChanges, Input, OnDestroy, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from '../services/events.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css'],

})
export class EventsDetailsComponent implements OnChanges, OnInit, OnDestroy {

  constructor(private _eventsService: EventsService, private _activatedRoute: ActivatedRoute, private _appService: AppService, private _router: Router) { }

  private _token: string;

  ngOnInit(): void {

    this._eventsService.getEventDetails(Number.parseInt(this._activatedRoute.snapshot.paramMap.get("eventId"))).subscribe(
      data => this.eventDetails = data,
      error => console.log(error),
      () => console.log("service completed")
    );

  }

  private _eventsServiceSubsription: Subscription;
  //@Input() public eventId: number;
  public eventDetails: Event;

  ngOnChanges(): void {

  }

  ngOnDestroy(): void {
    if (this._eventsServiceSubsription) {
      this._eventsServiceSubsription.unsubscribe()
    }
  }

}
