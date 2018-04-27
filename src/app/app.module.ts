import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BotaoDirective } from './componentes/botao.directive';
import { DatepickerDirective } from './componentes/datepicker.directive';
import { DatepickerComponent } from './componentes/datepicker/datepicker.component';
import { ValidateDirective } from './componentes/datepicker/validate.directive';


@NgModule({
  declarations: [
    AppComponent,
    BotaoDirective,
    DatepickerDirective,
    DatepickerComponent,
    ValidateDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
