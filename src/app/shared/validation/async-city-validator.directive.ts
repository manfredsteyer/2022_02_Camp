import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { FlightService } from '../../flight-booking/flight-search/flight.service';

@Directive({
  selector: 'input[asyncCity]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityValidatorDirective,
      multi: true
    }
  ]
})
export class AsyncCityValidatorDirective implements AsyncValidator {

  constructor(private flightService: FlightService) { }

  validate(control: AbstractControl): Observable<ValidationErrors> {

    // TODO: Provide exists method
    return this.flightService.find(control.value, '').pipe(
      map(flights => {

        if (flights.length !== 0) {
          return null;
        }

        return {
          asyncCity: true
        }

      }),
      delay(7000)
    );

  }
 

}
