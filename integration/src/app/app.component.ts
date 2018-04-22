import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { equal } from '@ng-validators/ng-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  rf: FormGroup;

  constructor(fb: FormBuilder) {
    this.rf = fb.group({
      'name': ['', equal('test')]
    });
  }
}
