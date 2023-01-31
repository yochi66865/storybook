import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { maxBy } from 'lodash';
import { Tab } from '../models/tab.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent implements AfterViewInit {
  @Input() tabs: Tab[] = [];
  @ViewChild('appScrollEvent', { read: ElementRef })
  sidenavContent!: ElementRef;
  @ViewChildren('section')
  sectionElements!: QueryList<ElementRef>;
  selectedSectionId: number = 0;
  observer!: IntersectionObserver;
  itemsOnScreen: Record<string, IntersectionObserverEntry> = {};

  constructor() {}

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
}
