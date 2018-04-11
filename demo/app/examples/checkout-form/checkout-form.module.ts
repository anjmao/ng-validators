import { NgModule } from '@angular/core';
import { CheckoutFormComponent } from './checkout-form.component';
import { NgbFormControl } from './ngb-form-control.directive';
import { NgbFormControlError } from './ngb-form-control-error.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        CheckoutFormComponent,
        NgbFormControl,
        NgbFormControlError
    ]
})
export class ChechoutFormModule { }
