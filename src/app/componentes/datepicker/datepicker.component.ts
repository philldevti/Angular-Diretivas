import { Component, OnInit, ElementRef, AfterContentInit, NgZone, Output, EventEmitter, HostListener, Input } from '@angular/core';

declare var $: any;



@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit, AfterContentInit {

  $datepicker: any;
  $dataAtual: any;

  @Output() dataSelected = new EventEmitter();

  constructor(private el: ElementRef, private zone: NgZone) {

  }

  ngOnInit() {
    this.$datepicker = this.el.nativeElement;
  }

  ngAfterContentInit(): void {
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

  valorAtual(): string {
    return this.$datepicker.val();
  }
}
