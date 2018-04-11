import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gt',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="gt" #gt="ngModel" gt="10"/>
            <p class="alert alert-danger" *ngIf="gt?.errors?.gt">greater than error</p>
            ---
      </form>
    </div>
    `
})
export class Gt implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
