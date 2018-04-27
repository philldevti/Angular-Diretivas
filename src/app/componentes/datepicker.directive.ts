import { Directive, ElementRef, Renderer, Host, AfterViewInit, OnDestroy } from '@angular/core';
import { Renderer2, Inject, NgZone, EventEmitter, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var $: any;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'datepicker'
})
export class DatepickerDirective implements AfterViewInit {
  $datepicker: any;
  $dataAtual: any;

  @Output() dataSelected = new EventEmitter();
  private input: any;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document, private zone: NgZone) {
    this.input = document.createElement('input');
    this.input.type = 'text';
  }


  ngAfterViewInit() {
    this.init();
  }

  init() {
    this.renderer.appendChild(this.el.nativeElement, this.input);
    this.zone.runOutsideAngular(() => {
      // $.getScript('https://code.jquery.com/ui/1.12.1/jquery-ui.js').done(() => {
      this.$datepicker = $(this.el.nativeElement.childNodes[0]).datepicker();
      this.$datepicker.on('change', (event, slick, direction) => {
        this.zone.run(() => {
          this.$dataAtual = this.$datepicker;
          this.dataSelected.emit(this.$dataAtual.val());
        });
      });
      // });
    });
  }

}
