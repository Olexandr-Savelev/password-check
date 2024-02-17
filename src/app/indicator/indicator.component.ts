import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss'],
})
export class IndicatorComponent {
  @Input() id!: number;
  @Input() passwordStrength!: string;
  @Input() isLongEnough!: boolean;
  @Input() isEmpty!: boolean;
}
