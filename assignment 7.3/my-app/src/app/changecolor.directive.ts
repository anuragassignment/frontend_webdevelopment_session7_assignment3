import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';

// custom directive which chages background color for odd and even values of index
@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective implements OnInit {
  @Input() index: any;

  constructor(private elementRef: ElementRef, private render: Renderer2) { }
  // listnes to mouseenter event of the element on which custom directive is applied and calls the function
  @HostListener('mouseenter') bgColor() {

    if (this.index % 2 === 0) {
      // style set through Renderer2 and not by directly accessing DOM element.
      this.render.setStyle(this.elementRef.nativeElement, 'color', 'green');
    } else {
      this.render.setStyle(this.elementRef.nativeElement, 'color', 'red');
    }

  }
  // listens to the mouseleave event on the element on which directive is applied
  @HostListener('mouseleave') bgColorRm() {
    this.render.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }

  ngOnInit() {
    this.index += 1;
  }
}
