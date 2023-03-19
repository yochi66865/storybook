import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[afui-input-prefix]',
    exportAs: `afui-input-prefix`
})

export class AfuiInputPrefixDirective {

    constructor(private renderer: Renderer2,
        private hostElement: ElementRef) {
        renderer.addClass(hostElement.nativeElement, 'afui-input-prefix');
    }
}
