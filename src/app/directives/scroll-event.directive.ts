import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appScrollEvent]',
})
export class ScrollEventDirective implements AfterViewInit {
  sectionElements: HTMLElement[] = [];
  selectedIndex: number = 0;
  currentOffsetTop!: number;
  nextOffsetTop!: number;

  constructor(private containerElement: ElementRef) {}

  ngAfterViewInit(): void {
    (this.containerElement.nativeElement as HTMLElement)
      .querySelectorAll('section')
      .forEach((sectionElement) => this.sectionElements.push(sectionElement));
    this.addTabIndex(0);
  }

  @HostListener('scroll', ['$event'])
  private onScroll($event: any): void {
    const scrollTop = $event.srcElement.scrollTop + 100;
    if (this.nextOffsetTop && scrollTop > this.nextOffsetTop) {
      this.addTabIndex(this.selectedIndex + 1);
    }

    if (scrollTop < this.currentOffsetTop) {
      this.addTabIndex(this.selectedIndex - 1);
    }
  }

  private addTabIndex(index: number) {
    this.selectedIndex = index;
    (this.containerElement.nativeElement as HTMLElement).tabIndex = index;
    this.calculateOffsetTop();
  }

  private calculateOffsetTop() {
    this.nextOffsetTop =
      this.sectionElements[this.selectedIndex + 1]?.offsetTop;
    this.currentOffsetTop = this.sectionElements[this.selectedIndex]?.offsetTop;
  }
}
