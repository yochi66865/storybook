import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'afui-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less'],
})
export class TabComponent implements OnInit {
  @Input() svgIconName: string = '';
  @Input() label: string = '';
  @Input() isActive: boolean = false;
  @Input() withCloseIcon: boolean = false;
  @Output() click: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
