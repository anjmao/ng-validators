import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'email',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="email" #email="ngModel" email/>
            <p class="alert alert-danger" *ngIf="email?.errors?.email">email error</p>
            ---
      </form>
    </div>
    `
})
export class Email implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
