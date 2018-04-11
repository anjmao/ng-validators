import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lte',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="lte" #lte="ngModel" lte="5"/>
            <p class="alert alert-danger" *ngIf="lte?.errors?.lte">less than equal error</p>
            ---
      </form>
    </div>
    `
})
export class Lte implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
