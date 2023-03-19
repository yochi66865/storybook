import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[afui-input-suffix]',
    exportAs: `afui-input-suffix`
})

export class AfuiInputSuffixDirective {

    constructor(private renderer: Renderer2,
        private hostElement: ElementRef) {
        renderer.addClass(hostElement.nativeElement, 'afui-input-suffix');
    }
}
