import { Component, Input } from '@angular/core';

@Component({
  selector: 'be-context-menu',
  templateUrl: './be-context-menu.component.html',
  styleUrls: ['./be-context-menu.component.css']
})
export class BeContextMenuComponent {
  constructor() { }

  @Input() x=0;
  @Input() y=0;
}
