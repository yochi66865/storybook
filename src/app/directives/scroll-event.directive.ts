import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appScrollEvent]',
})
export class ScrollEventDirective implements OnChanges {
  @Input() sectionElements: ElementRef[] = [];
  initialVariables: boolean = false;
  selectedIndex: number = 0;
  currentOffsetTop!: number;
  nextOffsetTop!: number;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sectionElements.length && !this.initialVariables) {
      this.calculateOffsetTop();
      this.initialVariables;
    }

    // console.log('changes');
  }

  @HostListener('scroll', ['$event'])
  private onScroll($event: any): void {
    if (
      this.nextOffsetTop &&
      $event.srcElement.scrollTop > this.nextOffsetTop
    ) {
      this.addTabIndex(this.selectedIndex + 1);
    }

    if ($event.srcElement.scrollTop < this.currentOffsetTop) {
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
    this.calculateOffsetTop();
  }

  calculateOffsetTop() {
    this.nextOffsetTop = (
      this.sectionElements[this.selectedIndex + 1]?.nativeElement as HTMLElement
    )?.offsetTop;
    this.currentOffsetTop = (
      this.sectionElements[this.selectedIndex].nativeElement as HTMLElement
    ).offsetTop;
  }
}
