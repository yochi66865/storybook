import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entity } from './models';

@Component({
  selector: 'afui-select-alternative',
  templateUrl: './afui-select-alternative.component.html',
  styleUrls: ['./afui-select-alternative.component.less'],
})
export class AfuiSelectAlternativeComponent implements OnInit {
  @Input() headQuarters: Entity[] = [];
  @Input() alternatives: Entity[] = [];
  @Input() selectedAlternatives: Map<string, string> = new Map();
  @Output() selected: EventEmitter<Map<string, string>> = new EventEmitter();

  placeholder = 'בחירה';
  constructor() {}

  ngOnInit(): void {}
}
