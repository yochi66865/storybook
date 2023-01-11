import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterViewInit {
  @ViewChildren('section') sectionElements!: QueryList<ElementRef>;
  constructor() {}

  ngAfterViewInit(): void {
    (this.getSectionElements[0].nativeElement as HTMLElement).tabIndex = 0;
  }

  array = [1, 2, 3, 4, 5, 6];

  get getSectionElements(): ElementRef<any>[] {
    return this.sectionElements?.toArray() ?? [];
  }

  onScroll(event: any) {
    console.log('scroll', event);
  }
}
