import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'max',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="max" #max="ngModel" max="5"/>
            <p class="alert alert-danger" *ngIf="max?.errors?.max">max error</p>
            ---
      </form>
    </div>
    `
})
export class Max implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
