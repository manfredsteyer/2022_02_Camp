import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { validateCity } from '../../shared/validation/validate-city';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) { 

    this.formGroup = fb.group({
      id: [],
      from: [
        'Graz', 
        [
          validateCity(['Graz', 'Hamburg', 'Zürch']),
          Validators.required, 
          Validators.minLength(3)
        ],
        [
          // async ...
        ]
      ],
      to: [],
      date: [],
      delayed: []
    });

    // this.formGroup.validator = Validators.required;
    // this.formGroup.asyncValidator = ...

    this.formGroup.valueChanges.subscribe(form => {
      console.debug('form changed!', form);
    });

    this.formGroup.controls['to'].valueChanges.subscribe(to => {
      console.debug('to changed!', to);
    });

  }

  id = '';
  showDetails = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.showDetails = (params['showDetails'] === 'true');
    });
  }

  save(): void {
    const form = this.formGroup.value;
    console.debug('we would now save this if this wasn\'t a shareware version', form);
  }

}
