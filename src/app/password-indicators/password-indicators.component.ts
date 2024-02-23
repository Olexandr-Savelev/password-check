import { Component, OnDestroy } from '@angular/core';
import { PasswordService, PasswordState } from '../password.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-password-indicators',
  templateUrl: './password-indicators.component.html',
  styleUrls: ['./password-indicators.component.scss'],
})
export class PasswordIndicatorsComponent implements OnDestroy {
  passwordSubscription = new Subscription();
  passwordState!: PasswordState;

  constructor(private passwordService: PasswordService) {
    this.passwordSubscription = this.passwordService.passwordState.subscribe(
      (state) => {
        this.passwordState = state;
      }
    );
  }

  ngOnDestroy(): void {
    this.passwordSubscription.unsubscribe();
  }
}
