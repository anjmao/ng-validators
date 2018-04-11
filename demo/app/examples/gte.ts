import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gte',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="gte" #gte="ngModel" gte="10"/>
            <p class="alert alert-danger" *ngIf="gte?.errors?.gte">greater than equal error</p>
            ---
      </form>
    </div>
    `
})
export class Gte implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
