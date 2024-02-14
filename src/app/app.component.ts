import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'password-check';

  passwordValue: string = '';

  isHide: boolean = true;

  togglePasswordVisibility() {
    this.isHide = !this.isHide;
  }

  onPasswordChange(event: Event): void {
    const { target } = event;
    this.passwordValue = (target as HTMLInputElement).value;
  }
}
