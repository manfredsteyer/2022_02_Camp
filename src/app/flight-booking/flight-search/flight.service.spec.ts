import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FlightService } from './flight.service';


fdescribe('FlightService', () => {
  let service: FlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FlightService);
  });

  it('should call right URL for searching flights', () => {

    const ctrl = TestBed.inject(HttpTestingController);

    service.find('Graz', 'Hamburg').subscribe(flights => {
      expect(flights.length).toBe(1)
    });

    // const req = ctrl.expectOne('http://www.angular.at/api/flight?from=Graz&to=Hamburg');

    const requests = ctrl.match(req => req.url.startsWith('http://www.angular.at/api/flight') && req.method === 'GET');

    expect(requests.length).toBe(1);
    const req = requests[0];

    req.flush([{ id: 7, from: 'Graz', to: 'Hamburg', date: 'jetzt', delayed: false }]);

  });
});


