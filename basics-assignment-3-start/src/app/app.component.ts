import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  buttonClicks = [];

  showParagraph() {
    if (this.show) this.show = false;
    else this.show = true;

    this.buttonClicks.push(this.buttonClicks.length + 1);
  }
}
