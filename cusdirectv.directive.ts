import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appCusdirectv]'
})
export class CusdirectvDirective  {
  constructor(private el: ElementRef) { }
    @HostListener('mouseenter') onMouseEnter() {
      // this.highlight('250px');
      this.highlight('pink');
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
    private highlight(color: string) {
      // this.el.nativeElement.style.font = 'size';
      this.el.nativeElement.style.backgroundColor = color;
    }

}
