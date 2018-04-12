import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import * as formUtils from './form-utils';

@Component({
    selector: 'checkout-form',
    styleUrls: ['./checkout-form.component.scss'],
    templateUrl: './checkout-form.component.html'
})
export class CheckoutFormComponent implements OnInit {

    checkoutForm: FormGroup;

    countries = [
        { id: 1, name: 'Lithuania' },
        { id: 2, name: 'United States' }
    ];

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.checkoutForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            address: ['', Validators.required],
            countryId: [null, Validators.required]
        });
    }

    saveForm() {
        if (this.checkoutForm.invalid) {
            formUtils.markFormGroupAsTouched(this.checkoutForm);
        }
    }
}

