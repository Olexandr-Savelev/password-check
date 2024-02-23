import { Component, Input } from '@angular/core';
import { PasswordState } from '../password.service';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss'],
})
export class IndicatorComponent {
  @Input() id!: number;
  @Input() passwordState!: PasswordState;
}
