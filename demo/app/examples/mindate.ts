import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'minDate',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="date" [ngModel]="minDateFrom" name="minDateFrom" #minDateFrom="ngModel" />
            <input class="form-control" type="date" ngModel name="minDate" #minDate="ngModel" [minDate]="minDateFrom.control"/>
            <p class="alert alert-danger" *ngIf="minDate?.errors?.minDate">minDate error</p>
            ---
      </form>
    </div>
    `
})
export class MinDate implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
