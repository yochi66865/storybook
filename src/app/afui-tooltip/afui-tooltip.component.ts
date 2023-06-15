import {
  Component,
  Input,
  TemplateRef,
  OnInit,
  HostListener,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ArrowPosition = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: 'afui-tooltip',
  host: {
    '[class.with-header]': 'header',
  },
  templateUrl: './afui-tooltip.component.html',
  styleUrls: ['./afui-tooltip.component.less'],
})
export class AfUiTooltipComponent implements OnInit {
  @Input() content!: string | TemplateRef<any>;
  @Input() context: Record<string, unknown> = {};
  @Input() arrowPosition!: ArrowPosition | null;
  @Input() header!: string;
  @Output() isMouseOver: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  mouseIsOverTheTooltip: boolean = false;

  _isTemplate: boolean = false;

  ngOnInit() {
    this._isTemplate = typeof this.content !== 'string';
  }

  @HostListener('mouseenter') mouseEnter() {
    this.isMouseOver.next(true);
    this.mouseIsOverTheTooltip = true;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.isMouseOver.next(false);
    this.mouseIsOverTheTooltip = false;
  }
}
