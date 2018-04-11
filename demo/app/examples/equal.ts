import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'equal',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="equal" #equal="ngModel" equal="aabbcc"/>
            <p class="alert alert-danger" *ngIf="equal?.errors?.equal">equal error</p>
            ---
      </form>
    </div>
    `
})
export class Equal implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
