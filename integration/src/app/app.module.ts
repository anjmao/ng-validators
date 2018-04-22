import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgValidatorsModule } from '@ng-validators/ng-validators';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgValidatorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
