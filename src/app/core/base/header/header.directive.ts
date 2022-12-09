import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHeader]'
})

// TODO appearance animation for menu

export class HeaderDirective {

  @HostListener('window:scroll', ['$event'])
  changeDisplay(event: Event) {

    if (window.scrollY > 100) {
      this.el.nativeElement.style.visibility = 'visible';
    } else {
      this.el.nativeElement.style.visibility = 'hidden';
    }
  }
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.visibility = 'hidden';
  }
}
