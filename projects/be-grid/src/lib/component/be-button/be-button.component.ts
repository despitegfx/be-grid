import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'be-button',
  templateUrl: './be-button.component.html',
  styleUrls: ['./be-button.component.css']
})
export class BeButtonComponent {
  @Input()
    label?: string;
    @Input()
    type?: string;
    @Input()
    color?: string;
    @Input()
    disabledButton?: boolean | false;
    @Input()
    hideButton?: boolean | false;
    @Input()
    rowData: any;

    @Output()
    btnClicked: EventEmitter<any> = new EventEmitter<any>();

    actionClick(action?: string) {
      this.btnClicked.emit({row: this.rowData, action: action})
    }
}
