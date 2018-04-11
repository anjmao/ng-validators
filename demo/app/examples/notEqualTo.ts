import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notEqualTo',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="oldPassword" #oldPassword="ngModel"/>
            <input class="form-control" type="text" ngModel name="notEqualTo" #notEqualTo="ngModel" [notEqualTo]="oldPassword"/>
            <p class="alert alert-danger" *ngIf="notEqualTo?.errors?.notEqualTo">notEqualTo error</p>
            ---
      </form>
    </div>
    `
})
export class NotEqualTo implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
