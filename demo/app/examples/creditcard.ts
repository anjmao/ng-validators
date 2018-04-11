import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'creditCard',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="creditCard" #creditCard="ngModel" creditCard/>
            <p class="alert alert-danger" *ngIf="creditCard?.errors?.creditCard">creditCard error</p>
            ---
      </form>
    </div>
    `
})
export class CreditCard implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
