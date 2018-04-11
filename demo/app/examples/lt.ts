import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lt',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="lt" #lt="ngModel" lt="5"/>
            <p class="alert alert-danger" *ngIf="lt?.errors?.lt">less than error</p>
            ---
      </form>
    </div>
    `
})
export class Lt implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
