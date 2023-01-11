import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollEvent]',
})
export class ScrollEventDirective {
  @Input() sectionElements: ElementRef[] = [];
  selectedIndex: number = 0;
  constructor() {}

  @HostListener('scroll', ['$event'])
  private onScroll($event: any): void {
    const next = (
      this.sectionElements[this.selectedIndex + 1]?.nativeElement as HTMLElement
    )?.offsetTop;
    const current = (
      this.sectionElements[this.selectedIndex].nativeElement as HTMLElement
    ).offsetTop;

    if (next && $event.srcElement.scrollTop > next) {
      this.addTabIndex(this.selectedIndex + 1);
    }

    if ($event.srcElement.scrollTop < current) {
      this.addTabIndex(this.selectedIndex - 1);
    }
  }

  getOffsetTop(): number[] {
    return this.sectionElements?.map(
      (sectionElement) =>
        (sectionElement.nativeElement as HTMLElement).offsetTop ?? 0
    );
  }

  addTabIndex(index: number) {
    (
      this.sectionElements?.[this.selectedIndex]?.nativeElement as HTMLElement
    ).tabIndex = -1;
    (this.sectionElements[index].nativeElement as HTMLElement).tabIndex = 0;
    this.selectedIndex = index;
  }
}
