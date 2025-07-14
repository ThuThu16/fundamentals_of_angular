import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true
})
export class TextColorDirective implements OnInit {
  @Input('appTextColor') color: string = 'black';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
  }
}
