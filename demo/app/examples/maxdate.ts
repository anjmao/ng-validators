import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'maxDate',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="date" [ngModel]="maxDateto" name="maxDateto" #maxDateTo="ngModel" />
            <input class="form-control" type="date" ngModel name="maxDate" #maxDate="ngModel" [maxDate]="maxDateTo.control" />
            <p class="alert alert-danger" *ngIf="maxDate?.errors?.maxDate">maxDate error</p>
            ---
      </form>
    </div>
    `
})
export class MaxDate implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
