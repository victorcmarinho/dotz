import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' | 'flat' = 'primary';
  @Input() buttonType = '';

  constructor() {}

}
