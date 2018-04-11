import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'url',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="url" #url="ngModel" url/>
            <p class="alert alert-danger" *ngIf="url?.errors?.url">url error</p>
            ---
      </form>
    </div>
    `
})
export class Url implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
