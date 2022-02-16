import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateCity(allowed: string[]): ValidatorFn {
    
    return function(control: AbstractControl): ValidationErrors {

        if (allowed.includes(control.value)) {
            return null;
        }

        return { city: true };

    }
    
}