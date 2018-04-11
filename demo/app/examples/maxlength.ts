import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'maxlength',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="maxlength" #maxlength="ngModel" maxlength="5"/>
            <p class="alert alert-danger" *ngIf="maxlength?.errors?.maxlength">maxlength error</p>
            ---
      </form>
    </div>
    `
})
export class Maxlength implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
