
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'digits',
    template: `
      <div class="container">
      <form class="form-horizontal" novalidate>
            ---html,true
            <input class="form-control" type="text" ngModel name="digits" #digits="ngModel" digits/>
            <p class="alert alert-danger" *ngIf="digits?.errors?.digits">digits error</p>
            ---
      </form>
    </div>
    `
})
export class Digits implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
