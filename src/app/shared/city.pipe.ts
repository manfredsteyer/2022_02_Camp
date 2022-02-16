import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string, lang: string): string {

    var long, short;

    switch(value) {
      case 'Hamburg':
        long = 'Airport Hamburg International - Helmut Schmidt';
        short = 'HAM';
        break;

      case 'Graz':
        long = 'Flughafen Graz Thalerhof';
        short = 'GRZ';
        break;
  
      default:
        long = short = value;
    }

    if (fmt === 'long') {
      return long;
    }
    return short;



  }

}
