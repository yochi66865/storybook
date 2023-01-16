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
export class TabsComponent {
  @ViewChildren('section') sectionElements!: QueryList<ElementRef>;
  constructor() {}

  array = [1, 2, 3, 4, 5, 6];

  get getSelectionElements(): ElementRef<any>[] {
    return this.sectionElements?.toArray() ?? [];
  }
}
