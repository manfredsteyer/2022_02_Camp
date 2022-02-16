import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { validateCity } from './validate-city';


@Directive({
  selector: 'input[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidatorDirective,
      multi: true
    }
  ]
})
export class CityValidatorDirective implements Validator {

  @Input() city: string[] = [];

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {

    return validateCity(this.city);

  }

}
