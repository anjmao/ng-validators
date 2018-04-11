import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dateISO',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="dateISO" #dateISO="ngModel" dateISO/>
            <p class="alert alert-danger" *ngIf="dateISO?.errors?.dateISO">dateISO error</p>
            ---
      </form>
    </div>
    `
})
export class DateISO implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
