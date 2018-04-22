import { NgModule } from '@angular/core';
import { Base64Validator } from './base64/directive';
import { CreditCardValidator } from './credit-card/directive';
import { DateValidator } from './date/directive';
import { UUIDValidator } from './uuid/directive';
import { UrlValidator } from './url/directive';
import { RangeLengthValidator } from './range-length/directive';
import { RangeValidator } from './range/directive';
import { NumberValidator } from './number/directive';
import { NotEqualToValidator } from './not-equal-to/directive';
import { NotEqualValidator } from './not-equal/directive';
import { MinDateValidator } from './min-date/directive';
import { MinValidator } from './min/directive';
import { MaxDateValidator } from './max-date/directive';
import { MaxValidator } from './max/directive';
import { LessThanEqualValidator } from './less-than-equal/directive';
import { LessThanValidator } from './less-than/directive';
import { JSONValidator } from './json/directive';
import { GreaterThanEqualValidator } from './greater-than-equal/directive';
import { GreaterThanValidator } from './greater-than/directive';
import { EqualToValidator } from './equal-to/directive';
import { EqualValidator } from './equal/directive';
import { EmailValidator } from './email/directive';
import { DigitsValidator } from './digits/directive';
import { DateISOValidator } from './date-ios/directive';

@NgModule({
    declarations: [
        Base64Validator,
        CreditCardValidator,
        DateValidator,
        UUIDValidator,
        UrlValidator,
        RangeLengthValidator,
        RangeValidator,
        NumberValidator,
        NotEqualToValidator,
        NotEqualValidator,
        MinDateValidator,
        MinValidator,
        MaxDateValidator,
        MaxValidator,
        LessThanEqualValidator,
        LessThanValidator,
        JSONValidator,
        GreaterThanEqualValidator,
        GreaterThanValidator,
        EqualToValidator,
        EqualValidator,
        EmailValidator,
        DigitsValidator,
        DateISOValidator,
        DateValidator
    ],
    exports: [
        Base64Validator,
        CreditCardValidator,
        DateValidator,
        UUIDValidator,
        UrlValidator,
        RangeLengthValidator,
        RangeValidator,
        NumberValidator,
        NotEqualToValidator,
        NotEqualValidator,
        MinDateValidator,
        MinValidator,
        MaxDateValidator,
        MaxValidator,
        LessThanEqualValidator,
        LessThanValidator,
        JSONValidator,
        GreaterThanEqualValidator,
        GreaterThanValidator,
        EqualToValidator,
        EqualValidator,
        EmailValidator,
        DigitsValidator,
        DateISOValidator,
        DateValidator
    ]
})
export class NgValidatorsModule {

}
