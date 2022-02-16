import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'form[roundTrip]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundtripValidatorDirective,
      multi: true
    }
  ]
})
export class RoundtripValidatorDirective implements Validator {

  constructor() { }
 
  validate(control: AbstractControl): ValidationErrors {
    
    const formGroup = control as FormGroup;

    const from = formGroup?.controls['from']?.value;
    const to = formGroup?.controls['to']?.value;

    if (from === to && from ) {
      return {
        roundTrip: true
      }
    }

    return null;

  }
 

}
