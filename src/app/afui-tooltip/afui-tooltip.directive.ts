import {
  Directive,
  Input,
  TemplateRef,
  ElementRef,
  OnInit,
  HostListener,
  ComponentRef,
  OnDestroy,
} from '@angular/core';
import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AfUiTooltipComponent, ArrowPosition } from './afui-tooltip.component';

type XPosition = 'center' | 'start' | 'end';
type YPosition = 'center' | 'top' | 'bottom';

export type TooltipPosition =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right'
  | 'auto';
export type TooltipTrigger = 'hover' | 'click' | 'manual';

// TODO calculate position automatically
// TODO fix scrolling bug (tooltip stays on the same position)

@Directive({
  selector: '[afuiTooltip]',
  exportAs: 'afuiTooltip',
})
export class AfUiTooltipDirective implements OnInit, OnDestroy {
  @Input('afuiTooltipActive') tooltipActive: boolean = true;
  @Input('afuiTooltip') content!: string | TemplateRef<any>;
  @Input('afuiTooltipContext') context!: Record<string, unknown>;
  @Input('afuiTooltipOffset') tooltipOffset: number = 10;
  @Input('afuiTooltipStartVisible') startVisible: boolean = false;
  @Input('afuiTooltipHideDelay') hideDelay: number = 0;
  @Input('afuiTooltipShowDelay') showDelay: number = 0;
  @Input('afuiTooltipShowArrow') showArrow: boolean = true;
  @Input('afuiTooltipTrigger') tooltipTrigger: TooltipTrigger = 'hover';
  @Input('afuiTooltipPanelClass') panelClass!: string;
  @Input('afuiTooltipHeader') header!: string;
  @Input('afuiTooltipAllowHideOnMouseOver') allowHideOnMouseOver: boolean =
    false;

  @Input('afuiTooltipPosition') set positionInput(position: TooltipPosition) {
    this.position = position;
    if (this.overlayRef) {
      // Overlay exists, create a new one
      this.createOverlay();
    }
  }

  private tooltipRef!: ComponentRef<AfUiTooltipComponent>;
  private position!: TooltipPosition;
  private overlayRef!: OverlayRef;
  private arrowPosition!: ArrowPosition;
  private tooltipDirectiveMouseOver!: boolean;
  private tooltipComponentMouseOver!: boolean;
  private tooltipShowTimeout: any;
  private tooltipHideTimeout: any;
  private tooltipVisible: boolean = false;

  get isTooltipVisible(): boolean {
    return this.tooltipVisible;
  }

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
    private overlayPositionBuilder: OverlayPositionBuilder
  ) {}

  calculateTooltipPosition(tooltipPosition: TooltipPosition) {
    let originX: XPosition = 'center',
      originY: YPosition = 'center',
      overlayX: XPosition = 'center',
      overlayY: YPosition = 'center',
      offsetY = 0,
      offsetX = 0,
      arrowPosition: ArrowPosition = 'top';

    switch (tooltipPosition) {
      case 'top':
        originY = 'top';
        overlayY = 'bottom';
        offsetY = this.tooltipOffset * -1;
        arrowPosition = 'bottom';
        break;
      case 'top-left':
        originY = 'top';
        originX = 'start';
        overlayX = 'start';
        overlayY = 'bottom';
        offsetY = this.tooltipOffset * -1;
        arrowPosition = 'bottom';
        break;
      case 'top-right':
        originY = 'top';
        originX = 'end';
        overlayX = 'end';
        overlayY = 'bottom';
        offsetY = this.tooltipOffset * -1;
        arrowPosition = 'bottom';
        break;
      case 'bottom':
        originY = 'bottom';
        overlayY = 'top';
        offsetY = this.tooltipOffset;
        arrowPosition = 'top';
        break;
      case 'bottom-left':
        originY = 'bottom';
        originX = 'start';
        overlayX = 'start';
        overlayY = 'top';
        offsetY = this.tooltipOffset;
        arrowPosition = 'top';
        break;
      case 'bottom-right':
        originY = 'bottom';
        originX = 'end';
        overlayX = 'end';
        overlayY = 'top';
        offsetY = this.tooltipOffset;
        arrowPosition = 'top';
        break;
      case 'left':
        originX = 'start';
        overlayX = 'end';
        offsetX = this.tooltipOffset * -1;
        arrowPosition = 'right';
        break;
      case 'right':
        originX = 'end';
        overlayX = 'start';
        offsetX = this.tooltipOffset;
        arrowPosition = 'left';
        break;
    }

    return {
      originX,
      originY,
      overlayX,
      overlayY,
      offsetX,
      offsetY,
      arrowPosition,
    };
  }

  createOverlay() {
    this.hideTooltip();
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }

    let positionStrategy: FlexibleConnectedPositionStrategy;

    if (this.position === 'auto') {
      positionStrategy = this.overlayPositionBuilder
        .flexibleConnectedTo(this.elementRef)
        .withLockedPosition(false)
        .withPositions([
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom',
            offsetY: -this.tooltipOffset,
          },
          {
            originX: 'center',
            originY: 'bottom',
            overlayX: 'center',
            overlayY: 'top',
            offsetY: this.tooltipOffset,
          },
        ]);

      positionStrategy.positionChanges.subscribe((position) => {
        switch (position.connectionPair.overlayY) {
          case 'top':
            this.arrowPosition = 'top';
            break;
          case 'bottom':
            this.arrowPosition = 'bottom';
            break;
        }
        this.tooltipRef.instance.arrowPosition = this.arrowPosition;
        this.tooltipRef.changeDetectorRef.detectChanges();
      });
    } else {
      const ttPos = this.calculateTooltipPosition(this.position);
      positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withLockedPosition(false)
        .withPositions([
          {
            originX: ttPos.originX,
            originY: ttPos.originY,
            overlayX: ttPos.overlayX,
            overlayY: ttPos.overlayY,
            offsetY: ttPos.offsetY,
            offsetX: ttPos.offsetX,
          },
        ]);
      this.arrowPosition = ttPos.arrowPosition;
    }

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      panelClass: this.panelClass,
    });
  }

  ngOnInit() {
    this.createOverlay();

    if (this.startVisible) {
      this.showTooltip();
    }
  }

  clearVisibilityTimeouts() {
    clearTimeout(this.tooltipShowTimeout);
    clearTimeout(this.tooltipHideTimeout);
  }

  @HostListener('window:click', ['$event'])
  wClick(event: MouseEvent) {
    // determine wether click was inside tooltip, so tooltip won't be closed
    if (this.tooltipRef?.location?.nativeElement.contains(event.target)) {
      return;
    }

    if (
      !this.tooltipComponentMouseOver &&
      this.tooltipVisible &&
      this.tooltipTrigger === 'click'
    ) {
      this.hideTooltip();
    }
  }

  @HostListener('click') mClick() {
    if (!this.tooltipActive || this.tooltipTrigger !== 'click') {
      return;
    }

    if (this.tooltipVisible) {
      this.hideTooltip();
    } else {
      this.tooltipShowTimeout = setTimeout(() => {
        this.showTooltip();
      }, this.showDelay);
    }
  }

  @HostListener('mouseenter') mEnter() {
    this.tooltipDirectiveMouseOver = true;

    if (!this.tooltipActive || this.tooltipTrigger !== 'hover') {
      return;
    }

    this.clearVisibilityTimeouts();

    this.tooltipShowTimeout = setTimeout(() => {
      if (!this.tooltipDirectiveMouseOver) {
        return;
      }

      this.showTooltip();
    }, this.showDelay);
  }

  public showTooltip() {
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      this.tooltipRef = this.overlayRef.attach(
        new ComponentPortal(AfUiTooltipComponent)
      );
      if (this.tooltipTrigger === 'hover') {
        this.tooltipRef.location.nativeElement.addEventListener(
          'mouseleave',
          () => this.hideTooltip()
        );
      }
      this.tooltipRef.instance.content = this.content;
      this.tooltipRef.instance.context = this.context;
      this.tooltipRef.instance.header = this.header;
      this.tooltipRef.instance.arrowPosition = this.showArrow
        ? this.arrowPosition
        : null;

      if (this.tooltipTrigger !== 'hover') {
        this.overlayRef.updatePosition();
        this.tooltipRef.changeDetectorRef.detectChanges();
      }

      this.tooltipVisible = true;
    }
  }

  @HostListener('mouseleave') mLeave() {
    this.tooltipDirectiveMouseOver = false;
    if (this.tooltipTrigger !== 'hover') {
      return;
    }

    setTimeout(() => {
      this.hideTooltip();
    }, this.hideDelay + 100);
  }

  ngOnDestroy() {
    this.hideTooltip();
    this.overlayRef.dispose();
  }

  public hideTooltip() {
    if (
      this.tooltipRef &&
      this.tooltipRef.instance.mouseIsOverTheTooltip &&
      !this.allowHideOnMouseOver
    )
      return;

    if (this.tooltipTrigger !== 'hover') {
      if (this.overlayRef) {
        this.overlayRef.detach();
      }
      this.tooltipVisible = false;
      return;
    }

    this.clearVisibilityTimeouts();

    if (this.tooltipComponentMouseOver || this.tooltipDirectiveMouseOver) {
      return;
    }

    this.tooltipHideTimeout = setTimeout(() => {
      if (this.overlayRef) {
        this.overlayRef.detach();
      }
      this.tooltipVisible = false;
    }, this.hideDelay);
  }
}
