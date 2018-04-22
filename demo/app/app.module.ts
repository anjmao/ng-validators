import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LayoutHeaderComponent } from './layout/header.component';
import { LayoutSidenavComponent } from './layout/sidenav-component';
import { Required } from './examples/required';
import { Minlength } from './examples/minlength';
import { Maxlength } from './examples/maxlength';
import { Pattern } from './examples/pattern';
import { Date as DateExample } from './examples/date';
import { Base64 } from './examples/base64';
import { CreditCard } from './examples/creditcard';
import { DateISO } from './examples/dateiso';
import { MinDate } from './examples/mindate';
import { MaxDate } from './examples/maxdate';
import { Digits } from './examples/digits';
import { Email } from './examples/email';
import { Equal } from './examples/equal';
import { EqualTo } from './examples/equalTo';
import { NotEqual } from './examples/notEqual';
import { NotEqualTo } from './examples/notEqualTo';
import { Gt } from './examples/gt';
import { Gte } from './examples/gte';
import { Lt } from './examples/lt';
import { Lte } from './examples/lte';
import { Json } from './examples/json';
import { Min } from './examples/min';
import { Max } from './examples/max';
import { Number as NumberExample } from './examples/number';
import { Range as RangeExample } from './examples/range';
import { RangeLength } from './examples/rangeLength';
import { Url } from './examples/url';
import { Uuid } from './examples/uuid';
import { CheckoutFormComponent } from './examples/checkout-form/checkout-form.component';
import { ChechoutFormModule } from './examples/checkout-form/checkout-form.module';
import { NgValidatorsModule } from '@ng-validators/ng-validators';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/checkout-form',
        pathMatch: 'full'
    },
    { path: 'checkout-form', component: CheckoutFormComponent, data: { title: 'Checkout form' } },
    { path: 'required', component: Required, data: { title: 'Required' } },
    { path: 'minlength', component: Minlength, data: { title: 'Minlength' } },
    { path: 'maxlength', component: Maxlength, data: { title: 'Maxlength' } },
    { path: 'pattern', component: Pattern, data: { title: 'Pattern' } },
    { path: 'base64', component: Base64, data: { title: 'Base64' } },
    { path: 'creditCard', component: CreditCard, data: { title: 'Credit card' } },
    { path: 'date', component: DateExample, data: { title: 'Date' } },
    { path: 'dateISO', component: DateISO, data: { title: 'DateISO' } },
    { path: 'minDate', component: MinDate, data: { title: 'Min date' } },
    { path: 'maxDate', component: MaxDate, data: { title: 'Max date' } },
    { path: 'digits', component: Digits, data: { title: 'Digits' } },
    { path: 'email', component: Email, data: { title: 'Email' } },
    { path: 'equal', component: Equal, data: { title: 'Equal' } },
    { path: 'notEqual', component: NotEqual, data: { title: 'Not equal' } },
    { path: 'equalTo', component: EqualTo, data: { title: 'Equal to' } },
    { path: 'notEqualTo', component: NotEqualTo, data: { title: 'Not equal to' } },
    { path: 'gt', component: Gt, data: { title: 'Greater than' } },
    { path: 'gte', component: Gte, data: { title: 'Greater than equal' } },
    { path: 'lt', component: Lt, data: { title: 'Less than' } },
    { path: 'lte', component: Lte, data: { title: 'Less than equal' } },
    { path: 'json', component: Json, data: { title: 'JSON' } },
    { path: 'min', component: Min, data: { title: 'Min' } },
    { path: 'max', component: Max, data: { title: 'Max' } },
    { path: 'number', component: NumberExample, data: { title: 'Number' } },
    { path: 'range', component: RangeExample, data: { title: 'Range' } },
    { path: 'rangeLength', component: RangeLength, data: { title: 'Range length' } },
    { path: 'url', component: Url, data: { title: 'URL' } },
    { path: 'uuid', component: Uuid, data: { title: 'UUID' } },
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgValidatorsModule,
        HttpClientModule,
        ChechoutFormModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(
            appRoutes,
            {
                useHash: true
            }
        )
    ],
    declarations: [
        AppComponent,
        LayoutHeaderComponent,
        LayoutSidenavComponent,
        Required,
        Minlength,
        Maxlength,
        Pattern,
        Base64,
        CreditCard,
        DateExample,
        DateISO,
        MinDate,
        MaxDate,
        Digits,
        Email,
        Equal,
        NotEqual,
        EqualTo,
        NotEqualTo,
        Gt,
        Gte,
        Lt,
        Lte,
        Json,
        Min,
        Max,
        NumberExample,
        RangeExample,
        RangeLength,
        Url,
        Uuid
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

