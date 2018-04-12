[![npm version](https://badge.fury.io/js/%40ng-validators%2Fng-validators.svg)](https://badge.fury.io/js/%40ng-validators%2Fng-validators)
[![Build Status][travis-badge]][travis-badge-url]


[travis-badge]: https://travis-ci.org/anjmao/ng-validators.svg?branch=master
[travis-badge-url]: https://travis-ci.org/anjmao/ng-validators

# Description

This repository contains native angular forms validators for both template driven and reactive forms.

Table of contents
=================

  * [Getting started](#getting-started)
    * [Template driven forms](#usage-in-template-driven-forms)
    * [Reactive forms](#usage-in-reactive-forms)
  * [Contributing](#contributing)
  
## Getting started

### Install library

using npm
```bash
npm install @ng-validators/ng-validators --save 
```
using yarn
```bash
yarn add @ng-validators/ng-validators
```

### Usage in reactive forms.
Import only validators you need for you form.

```ts
import { greaterThan } from '@ng-validators/ng-validators';

this.formBuilder.group({
    age: ['', greaterThan(18)]
});
```

### Usage in template driven forms.
Import only validators you need for you form and add them to you @NgModule declarations.

```ts
import { GreaterThanValidator } from '@ng-validators/ng-validators';

@NgModule({
    declarations: [GreaterThanValidator],
    exports: [GreaterThanValidator]
})
export class MyValidatorsModule {
}
```

Now you can use validator directive in HTML template
```html
<input class="form-control" type="text" ngModel name="gt" gt="10"/>
```


# Validators

## Angular built-in validators

- [x] required
- [x] minlength
- [x] maxlength
- [x] pattern

## Custom validators

- [x] rangeLength
- [x] min
- [x] gt
- [x] gte
- [x] max
- [x] lt
- [x] lte
- [x] range
- [x] digits
- [x] number
- [x] url
- [x] email
- [x] date
- [x] minDate
- [x] maxDate
- [x] dateISO
- [x] creditCard
- [x] json
- [x] base64
- [x] uuid
- [x] equal
- [x] notEqual
- [x] equalTo
- [x] notEqualTo
- [ ] Your validator can be here. PR is welcome :)

## Contributing

Contributions are welcome. You can start by looking at [issues](https://github.com/ng-validators/ng-validators/issues) with label *Help wanted*  or creating new Issue with proposal or bug report. If you need validator but it is not listed here, you can submit PR with your validator.

## License

MIT
