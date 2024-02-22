import { Component, Input, OnDestroy } from '@angular/core';
import { PasswordService } from '../password.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss'],
})
export class IndicatorComponent implements OnDestroy {
  @Input() id!: number;
  passwordStrength!: string;
  isLongEnough!: boolean;
  isEmpty!: boolean;
  passwordSubscription = new Subscription();

  constructor(private passwordService: PasswordService) {
    this.passwordSubscription = this.passwordService.passwordState.subscribe(
      (state) => {
        this.passwordStrength = state.passwordStrength;
        this.isLongEnough = state.isLongEnough;
        this.isEmpty = state.isEmpty;
      }
    );
  }

  ngOnDestroy(): void {
    this.passwordSubscription.unsubscribe();
  }
}
