import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { Validators } from '@angular/forms';

@Component({
    selector: 'checkout-form',
    styleUrls: ['./checkout-form.component.scss'],
    templateUrl: './checkout-form.component.html'
})
export class CheckoutFormComponent implements OnInit {

    checkoutForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.checkoutForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
        });
    }
}
