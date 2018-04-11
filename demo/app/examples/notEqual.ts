import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notEqual',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="notEqual" #notEqual="ngModel" notEqual="aabbcc"/>
            <p class="alert alert-danger" *ngIf="notEqual?.errors?.notEqual">notEqual error</p>
            ---
      </form>
    </div>
    `
})
export class NotEqual implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
