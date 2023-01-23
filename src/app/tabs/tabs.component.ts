import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent implements AfterViewInit, OnChanges {
  @ViewChild('appScrollEvent', { read: ElementRef })
  sidenavContent!: ElementRef;
  @ViewChildren('section')
  sectionElements!: QueryList<ElementRef>;
  selectedSectionId: number = 0;
  observer: IntersectionObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting === true) {
        this.selectedSectionId = +entries[0].target.id;
      }
    },
    { threshold: [0] }
  );

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit(): void {
    console.log('sectionElements', this.sectionElements);
    this.sectionElements.forEach((section) =>
      this.observer.observe(section.nativeElement)
    );
  }
  scrollTo(sectionIndex: number) {
    let sectionOffsetTop =
      this.sectionElements.get(sectionIndex)?.nativeElement?.offsetTop ?? 0;
    (this.sidenavContent.nativeElement as HTMLElement).scrollTo({
      top: sectionOffsetTop,
    });
  }

  array = [0, 1, 2, 3, 4, 5];
}
