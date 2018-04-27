import { Directive, Input, HostListener, ElementRef, Host } from '@angular/core';
import { DatepickerComponent } from './datepicker.component';

@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective {

  @Input() onChangeValidate = (e) => { };
  constructor(private el: ElementRef, @Host() private datepicker: DatepickerComponent) { }

  @HostListener('blur', ['$event'])
  validate() {
    this.onChangeValidate(this.datepicker.valorAtual());
  }
}
