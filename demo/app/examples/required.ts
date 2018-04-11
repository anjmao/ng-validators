import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'required',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control"
                type="text"
                ngModel
                name="requried"
                #requried="ngModel"
                required/>
            <p class="alert alert-danger" *ngIf="requried?.errors?.required">required error</p>
            ---
      </form>
    </div>
    `
})

export class Required implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
