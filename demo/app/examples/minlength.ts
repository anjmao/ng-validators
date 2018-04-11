import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'minlength',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="minlength" #minlength="ngModel" minlength="5"/>
            <p class="alert alert-danger" *ngIf="minlength?.errors?.minlength">minlength error</p>
            ---
      </form>
    </div>
    `
})
export class Minlength implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
