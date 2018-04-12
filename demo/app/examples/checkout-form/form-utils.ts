import { FormGroup } from '@angular/forms';

export function markFormGroupAsTouched(formGroup: FormGroup) {
    for (const key in formGroup.controls) {
        if (formGroup.controls.hasOwnProperty(key)) {
            const control = formGroup.controls[key];
            control.markAsTouched();
            if (control instanceof FormGroup) {
                this.markFormGroupAsTouched(control)
            }
        }
    }
}
