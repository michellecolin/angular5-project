import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  default = 'advanced';

  onSubmit() {
    console.log(
    this.signupForm.value.email,
    this.signupForm.value.password,
    this.signupForm.value.subscription);
  }
}
