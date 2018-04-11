import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'number',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="number" #number="ngModel" number/>
            <p class="alert alert-danger" *ngIf="number?.errors?.number">number error</p>
            ---
      </form>
    </div>
    `
})
export class Number implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
