import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  interval;
  @Output() incrementer = new EventEmitter<{counter}>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.incrementer.emit({counter: this.counter});
      this.counter++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
