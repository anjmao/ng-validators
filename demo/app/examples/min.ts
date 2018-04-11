import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'min',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="min" #min="ngModel" min="5"/>
            <p class="alert alert-danger" *ngIf="min?.errors?.min">min error</p>
            ---
      </form>
    </div>
    `
})
export class Min implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
