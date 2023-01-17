import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterViewInit {
  @ViewChild('appScrollEvent', { read: ElementRef })
  sidenavContent!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {}

  array = [1, 2, 3, 4, 5, 6];
}
