import { Component } from '@angular/core';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  isHide: boolean = true;

  constructor(private passwordSerice: PasswordService) {}

  togglePasswordVisibility() {
    this.isHide = !this.isHide;
  }

  onChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.passwordSerice.onChange(value);
  }
}
