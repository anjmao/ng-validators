import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'uuid',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="uuid" #uuid="ngModel" uuid="3"/>
            <p class="alert alert-danger" *ngIf="uuid?.errors?.uuid">uuid error</p>
            ---
      </form>
    </div>
    `
})
export class Uuid implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
