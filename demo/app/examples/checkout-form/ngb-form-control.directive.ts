import { ContentChild, Directive, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ElementRef } from '@angular/core';

@Directive({ selector: '.form-control:not([ngbFormControl]),[ngbFormControl],[formControlName]' })
export class NgbFormControl {
    @ContentChild(NgControl) ngControl: NgControl;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        const native: HTMLElement = this.el.nativeElement;
        native.classList.add('ngb-form-control');
    }

    @HostBinding('class.has-error')
    get isInvalid() {
        return this.ngControl && this.ngControl.touched && this.ngControl.invalid;
    }
}
