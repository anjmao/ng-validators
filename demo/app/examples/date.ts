import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'date',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="date" #date="ngModel" date/>
            <p class="alert alert-danger" *ngIf="date?.errors?.date">date error</p>
            ---
      </form>
    </div>
    `
})
export class Date implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
