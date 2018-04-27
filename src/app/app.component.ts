import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any;

  abrirGoogle() {
    window.open('http://www.google.com.br', '_blank');
  }

  pegarData(e) {
    console.log(e);
    this.data = e;
  }

  validaData(e) {
    alert(e);
  }
}
