import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CounterService]
})
export class AppComponent {
  activeUsers;
  inactiveUsers;
  counter;

  constructor(private userService: UserService, private counterService: CounterService) {
    this.activeUsers = userService.activeUsers;
    this.inactiveUsers = userService.inactiveUsers;
    this.counter = counterService.counter;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
    this.counterService.countUp();
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.counterService.countUp();
  }
}
