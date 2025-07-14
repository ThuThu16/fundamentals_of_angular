import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: true
})
export class FontSizeDirective implements OnInit {
  @Input('appFontSize') size: string = '16px';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', this.size);
  }
}
