import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Flight } from '../../model/flight';
import { DefaultFlightService, DummyFlightService, FlightService, FREE_FLIGHT_SERVICE } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [{
    provide: FlightService,
    useClass: DefaultFlightService
  }]
})
export class FlightSearchComponent implements OnInit {

  flights: Flight[] = [];
  selectedFlight: Flight;
  from = 'Graz';
  to = 'Hamburg';

  basket = {
    "3": true,
    "5": true
  };

  // @Inject(FREE_FLIGHT_SERVICE)
  // private http: HttpClient;
  constructor(private flightService: FlightService) { 
    // this.http = http;
  }

  ngOnInit(): void {
  }

  search(): void { 

    if (!this.from || !this.to) {
      return;
    }

    this.flightService.find(this.from, this.to).subscribe(
      flights => {
        this.flights = flights;
      },
      err => {
        console.error('erorr', err);
      }
    );

    // this.flights = [
    //   { id: 7, from: 'München', to: 'Flagranti', date: '2022-02-14T18:00', delayed: false },
    //   { id: 8, from: 'München', to: 'Kogntio', date: '2022-02-14T18:15', delayed: false },
    //   { id: 9, from: 'München', to: 'Mallorca', date: '2022-02-14T18:45', delayed: false },
    // ]
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
