import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'range',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="range" #range="ngModel" [range]="[4,9]"/>
            <p class="alert alert-danger" *ngIf="range?.errors?.range">range error</p>
            ---
      </form>
    </div>
    `
})
export class Range implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
