import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

/**
 * requiredAddressValidator
 * 
 * A função tem como objetivo tornar todos os inputs do endereço como required
 * caso o usuário preencha algum dos campos do endereço.
 * 
 * @param control
 * @returns  ValidationErrors | null
 */
export const requiredAddressValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const addressGroup = control as FormGroup;

    const controlsToCheck = Object
        .keys(addressGroup.controls)
        .filter(
            (controlKey) => controlKey !== 'type' && controlKey !== 'typeDescription'
        );

    const hasAnyText = controlsToCheck
        .some((controlKey) => hasText(addressGroup.get(controlKey))
        );

    for (const controlName of controlsToCheck) {
        const control = addressGroup.get(controlName);

        //!control.value retorna TRUE caso não exista nada escrito no campo.
        if (control) {
            if (hasAnyText && !control.value) {
                control.setErrors({ requiredAddressControl: true });
                control.markAsTouched();
            } else {
                control.setErrors(null);
            };
        };
    };

    return null;
};

const hasText = (control: AbstractControl | null): boolean => {
    return !!control && control.value && control.value.toString().trim().length > 0;
};
