import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';
import { $ } from 'jquery';



@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[btnConfirm]'
})
export class BotaoDirective {
  @Input() messge = 'Deseja realmente efetuar esta ação? ';
  @Input() btnConfirm = () => { };

  constructor(el: ElementRef, renderer: Renderer) {
    console.log(el);
  }

  @HostListener('click', ['$event'])
  confirmFirst() {
    const confirmed = window.confirm(this.messge);

    if (confirmed) {
      this.btnConfirm();
    }
  }



}
