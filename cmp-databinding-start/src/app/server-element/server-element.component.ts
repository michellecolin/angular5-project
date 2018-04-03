import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None //css encapsulation and inheritance
})
export class ServerElementComponent implements OnInit {
  @Input('srveElement') element: {type: string, name: string, content:string}; //any parent component can access this element

  constructor() { }

  ngOnInit() {
  }

}
