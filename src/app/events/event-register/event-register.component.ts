import { Component, OnDestroy, OnInit } from '@angular/core';
import { DemoEventForm } from '../models/demo-event-form';
import { EventsService } from '../services/events.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit, OnDestroy {


  constructor(private _eventsService: EventsService, private _router: Router) {

  }
  public title: string = "New Event Registration Form";
  public demoEventForm: DemoEventForm = new DemoEventForm();
  private _eventsServiceSubscription: Subscription;
  ngOnInit(): void {


    this.demoEventForm.eventForm.controls['EventCode'].setValue("hirenp")
  }

  test(): void {
    console.log(this.demoEventForm.eventForm.controls['EventId'].value + this.demoEventForm.eventForm.controls['SeatsFilled'].value)
  }
  onEventSubmit(e): void {
    e.preventDefault();
    //console.log(this.demoEventForm.eventForm)

    this._eventsService.registerEvents(this.demoEventForm.eventForm.value).subscribe(
      data =>{
        if (data) {
         this._router.navigate(["/events"])
        }
      },
      error => console.log(error)
    );
  }

  ngOnDestroy(){
    if (this._eventsServiceSubscription) {
      this._eventsServiceSubscription.unsubscribe();
    }
  }

}
