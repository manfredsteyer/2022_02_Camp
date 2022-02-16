import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CityPipe } from '../../shared/city.pipe';
import { SharedModule } from '../../shared/shared.module';
import { FlightBookingModule } from '../flight-booking.module';
import { FlightCardComponent } from '../flight-card/flight-card.component';

import { FlightSearchComponent } from './flight-search.component';
import { DummyFlightService, FlightService } from './flight.service';

// describe describe fdescribe

fdescribe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //imports: [SharedModule, HttpClientModule, FormsModule],
      imports: [HttpClientModule, FlightBookingModule],
      declarations: [ FlightSearchComponent, FlightCardComponent ],
      providers: [ 
        { provide: FlightService, useClass: DummyFlightService }
      ]
    })
    .compileComponents();


    TestBed.overrideComponent(FlightSearchComponent, {
      add: {
        providers: [
          { provide: FlightService, useClass: DummyFlightService }
        ]
      }
    });

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not have a selectedFlight initially  ', () => {

    expect(component.selectedFlight).toBeUndefined();
  
  });



  it('should not load flights without from or to', () => {

    component.from = '';
    component.to = '';
    component.search();
    expect(component.flights.length).toBe(0);
 
  });

  it('should load flights when from and to given', () => {

    component.from = 'Graz';
    component.to = 'Hamburg';
    component.search();   
    expect(component.flights.length).toBe(3);
 
  });


});
