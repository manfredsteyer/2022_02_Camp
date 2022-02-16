import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../model/flight';

@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    
    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers });
  }

}


@Injectable()
export class DummyFlightService implements FlightService {

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 7, from: 'München', to: 'Flagranti', date: '2022-02-14T18:00', delayed: false },
      { id: 8, from: 'München', to: 'Kogntio', date: '2022-02-14T18:15', delayed: false },
      { id: 9, from: 'München', to: 'Mallorca', date: '2022-02-14T18:45', delayed: false },
    ]);
  }

}

const DEBUG = false;

@Injectable({
  providedIn: 'root',
  // useClass: DefaultFlightService
  useFactory: (http: HttpClient) => {
    if (DEBUG) {
      return new DummyFlightService();
    }
    else {
      return new DefaultFlightService(http);
    } 
  },
  deps: [HttpClient]
})
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}


export const FREE_FLIGHT_SERVICE = new InjectionToken<FlightService>('FREE_FLIGHT_SERVICE', {
  providedIn: 'root',
  factory: () => new DefaultFlightService(inject(HttpClient))
});
