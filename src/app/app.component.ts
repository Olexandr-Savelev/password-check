import { Component } from '@angular/core';
import { PasswordService } from './password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'password-check';
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
