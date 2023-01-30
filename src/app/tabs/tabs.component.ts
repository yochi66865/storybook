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
import { maxBy } from 'lodash';

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
  observer!: IntersectionObserver;
  itemsOnScreen2: Set<IntersectionObserverEntry> = new Set();
  itemsOnScreen: Record<string, IntersectionObserverEntry> = {};

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        this.mapSectionsOnScreen(entries);
        this.selectedSectionIdByMaxIntersectionRatio();
      },
      {
        threshold: [0, 0.25, 0.75, 1],
        root: this.sidenavContent.nativeElement,
      }
    );
    console.log('sectionElements', this.sectionElements);
    this.sectionElements.forEach((section) =>
      this.observer.observe(section.nativeElement)
    );
  }

  mapSectionsOnScreen(sections: IntersectionObserverEntry[]) {
    sections.forEach((section) => {
      if (section.isIntersecting) {
        this.itemsOnScreen[section.target.id] = section;
      } else {
        delete this.itemsOnScreen[section.target.id];
      }
    });
  }

  selectedSectionIdByMaxIntersectionRatio() {
    this.selectedSectionId = +(
      maxBy(Object.values(this.itemsOnScreen), 'intersectionRatio')?.target
        ?.id ?? 0
    );
  }

  scrollTo(sectionIndex: number) {
    let sectionOffsetTop =
      this.sectionElements.get(sectionIndex)?.nativeElement?.offsetTop ?? 0;
    (this.sidenavContent.nativeElement as HTMLElement).scrollTo({
      top: sectionOffsetTop + 1,
    });
  }

  array = [0, 1, 2, 3, 4, 5];
}
