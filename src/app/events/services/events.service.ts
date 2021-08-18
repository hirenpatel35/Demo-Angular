import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable() /*{
  providedIn: 'root'
}*/
export class EventsService {

  constructor(private _httpClient: HttpClient) {

  }

  private _serviceUrl: string = "https://localhost:44356/Api/";
  public getAllEvents(): Observable<Event[]> {
    return this._httpClient.get<Event[]>(`${this._serviceUrl}Events`);
    //return this._eventsData;
  }

  public getEventDetails(eventId: number): Observable<Event> {

    return this._httpClient.get<Event>(`${this._serviceUrl}Events/${eventId}`);

    // return this._httpClient.get<Event>(`${this._serviceUrl}Events/${eventId}`,{
    //   headers:{
    //     "Authorization":`Bearer ${token}`
    //   }
    // })

  }

  public registerEvents(event: Event): Observable<Event>{

    return this._httpClient.post<Event>(`${this._serviceUrl}Events`, event);
  }

}
