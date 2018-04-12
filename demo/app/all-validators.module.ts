import { NgModule } from '@angular/core';
import { Base64Validator } from '@ng-validators/ng-validators';
import { CreditCardValidator } from '@ng-validators/ng-validators';
import { DateValidator } from '@ng-validators/ng-validators';
import { DateISOValidator } from '@ng-validators/ng-validators';
import { DigitsValidator } from '@ng-validators/ng-validators';
import { EmailValidator } from '@ng-validators/ng-validators';
import { EqualValidator } from '@ng-validators/ng-validators';
import { EqualToValidator } from '@ng-validators/ng-validators';
import { GreaterThanValidator } from '@ng-validators/ng-validators';
import { GreaterThanEqualValidator } from '@ng-validators/ng-validators';
import { JSONValidator } from '@ng-validators/ng-validators';
import { LessThanValidator } from '@ng-validators/ng-validators';
import { LessThanEqualValidator } from '@ng-validators/ng-validators';
import { MaxValidator } from '@ng-validators/ng-validators';
import { MaxDateValidator } from '@ng-validators/ng-validators';
import { MinValidator } from '@ng-validators/ng-validators';
import { MinDateValidator } from '@ng-validators/ng-validators';
import { NotEqualValidator } from '@ng-validators/ng-validators';
import { NotEqualToValidator } from '@ng-validators/ng-validators';
import { NumberValidator } from '@ng-validators/ng-validators';
import { RangeValidator } from '@ng-validators/ng-validators';
import { RangeLengthValidator } from '@ng-validators/ng-validators';
import { UrlValidator } from '@ng-validators/ng-validators';
import { UUIDValidator } from '@ng-validators/ng-validators';

const VALIDATORS_DIRECTIVES = [
    Base64Validator,
    CreditCardValidator,
    DateValidator,
    DateISOValidator,
    DigitsValidator,
    EmailValidator,
    EqualValidator,
    EqualToValidator,
    GreaterThanValidator,
    GreaterThanEqualValidator,
    JSONValidator,
    LessThanValidator,
    LessThanEqualValidator,
    MaxValidator,
    MaxDateValidator,
    MinValidator,
    MinDateValidator,
    NotEqualValidator,
    NotEqualToValidator,
    NumberValidator,
    RangeValidator,
    RangeLengthValidator,
    UrlValidator,
    UUIDValidator
];

@NgModule({
    declarations: [VALIDATORS_DIRECTIVES],
    exports: [VALIDATORS_DIRECTIVES]
})
export class AllValidatorsModule {
}
