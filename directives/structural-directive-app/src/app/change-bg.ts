import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]',
  standalone: true
})
export class ChangeBgDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBg('lightgrey');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBg('white');
  }

  private changeBg(color: string) {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', color);
  }
}
