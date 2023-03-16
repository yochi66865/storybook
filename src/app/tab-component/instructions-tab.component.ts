import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'instructions-tab',
  templateUrl: './instructions-tab.component.html',
  styleUrls: ['./instructions-tab.component.less'],
})
export class InstructionsTabComponent implements OnInit {
  @Input() svgIconName: string = '';
  @Input() label: string = '';
  @Input() isActive: boolean = false;
  @Output() click: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
