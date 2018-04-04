export class CounterService {
  counter = {count: 0};

  countUp() {
    this.counter.count++;
  }
}