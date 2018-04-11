import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'equalTo',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="password" #password="ngModel"/>
            <input class="form-control" type="text" ngModel name="equalTo" #equalTo="ngModel" [equalTo]="password"/>
            <p class="alert alert-danger" *ngIf="equalTo?.errors?.equalTo">equalTo error</p>
            ---
      </form>
    </div>
    `
})
export class EqualTo implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
