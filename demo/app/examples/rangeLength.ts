import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rangeLength',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="rangeLength" #rangeLength="ngModel" [rangeLength]="[4,9]"/>
            <p class="alert alert-danger" *ngIf="rangeLength?.errors?.rangeLength">rangeLength error</p>
            ---
      </form>
    </div>
    `
})
export class RangeLength implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
