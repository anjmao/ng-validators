import { Input, Directive, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ElementRef } from '@angular/core';

@Directive({ selector: '[ngbFormControlError]' })
export class NgbFormControlError {
    @Input('ngbFormControlError') ngControl: NgControl;
    private errorTypeElements: any[][] = [];
    constructor(private el: ElementRef) { }

    ngOnInit() {
        const native: HTMLElement = this.el.nativeElement;
        native.classList.add('ngb-form-control-error');
        const errorTypes: HTMLElement[] = Array.from(native.querySelectorAll('[errorType]'));
        for (const el of errorTypes) {
            this.errorTypeElements.push([el.getAttribute('errorType'), el]);
        }
    }

    @HostBinding('class.has-error')
    get isInvalid() {
        let firstErrorShown = false;
        for (const errorEl of this.errorTypeElements) {
            const key = errorEl[0];
            const val = errorEl[1];
            val.style.display = 'none';
            const error = this.ngControl.errors && this.ngControl.errors[key];
            if (error && !firstErrorShown) {
                firstErrorShown = true;
                val.style.display = 'block';
                continue;
            }
        }
        return this.ngControl && this.ngControl.touched && this.ngControl.errors;
    }
}
