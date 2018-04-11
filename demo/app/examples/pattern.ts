import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pattern',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="pattern" #pattern="ngModel" pattern="[a-z]{6}"/>
            <p class="alert alert-danger" *ngIf="pattern?.errors?.pattern">pattern error</p>
            ---
      </form>
    </div>
    `
})
export class Pattern implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
