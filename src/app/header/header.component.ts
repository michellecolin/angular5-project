import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() showTab = new EventEmitter<{tab}>();

  onShow(tab) {
    this.showTab.emit(tab);
  }
}
