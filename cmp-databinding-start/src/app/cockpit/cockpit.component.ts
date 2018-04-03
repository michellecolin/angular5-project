import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //Output, makes the event output reachable from outside the component 
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(element: HTMLInputElement) {
   this.serverCreated.emit({serverName: element.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(element: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: element.value, serverContent: this.newServerContent});
  }
}
