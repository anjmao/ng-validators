import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'json',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="json" #json="ngModel" json/>
            <p class="alert alert-danger" *ngIf="json?.errors?.json">json error</p>
            ---
      </form>
    </div>
    `
})
export class Json implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
