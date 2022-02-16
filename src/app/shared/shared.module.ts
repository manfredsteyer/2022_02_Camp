import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './city.pipe';
import { CityValidatorDirective } from './validation/city-validator.directive';
import { RoundtripValidatorDirective } from './validation/roundtrip-validator.directive';
import { AsyncCityValidatorDirective } from './validation/async-city-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe, 
    CityValidatorDirective, 
    RoundtripValidatorDirective, 
    AsyncCityValidatorDirective
  ],
  exports: [
    CityPipe,
    CityValidatorDirective,
    RoundtripValidatorDirective,
    AsyncCityValidatorDirective
  ]
})
export class SharedModule { }
