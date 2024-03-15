import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
    selector: '[appKeyboard]',
    standalone: true
})
export class KeyboardDirective {

    constructor(private location: Location) {
    }

    @HostListener('window:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if(event.key === 'Escape') {
            this.location.back();
        }
    }

}
