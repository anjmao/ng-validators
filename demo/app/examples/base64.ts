import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'base64',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="base64" #base64="ngModel" base64/>
            <p class="alert alert-danger" *ngIf="base64?.errors?.base64">base64 error</p>
            ---
      </form>
    </div>
    `
})
export class Base64 implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}

