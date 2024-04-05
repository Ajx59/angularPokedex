import {Directive, ElementRef, HostListener, Input} from '@angular/core';
@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {
  private initialColor: string = '#F5F5F5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;
  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }
  @Input('pkmnBorderCard') borderColor: string;//alias
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  setBorder(color: string){
    let border = `solid 4px ` + color;
    this.el.nativeElement.style.border = border;
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = height + `px`;
  }

}
