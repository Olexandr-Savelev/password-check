import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'password-check';

  isEmpty: boolean = true;
  isLongEnough: boolean = false;
  passwordStrength: string = '';

  isHide: boolean = true;

  togglePasswordVisibility() {
    this.isHide = !this.isHide;
  }

  checkPasswordCharacters(value: string) {
    const digitsPattern = /\d/;
    const lettersPattern = /[a-zA-Z]/;
    const symbolsPattern = /[^a-zA-Z0-9]/;

    const containDigits = digitsPattern.test(value);
    const containLetters = lettersPattern.test(value);
    const containSymbols = symbolsPattern.test(value);

    return {
      containDigits,
      containLetters,
      containSymbols,
    };
  }

  onPasswordChange(event: Event): void {
    const { target } = event;
    const passwordValue = (target as HTMLInputElement).value;

    console.log(passwordValue.length);

    if (passwordValue.length !== 0) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }

    if (passwordValue.length >= 8) {
      this.isLongEnough = true;

      const { containDigits, containLetters, containSymbols } =
        this.checkPasswordCharacters(passwordValue);

      if (containDigits && containLetters && containSymbols) {
        this.passwordStrength = 'Strong';
      } else if (
        (containDigits && containLetters) ||
        (containLetters && containSymbols) ||
        (containDigits && containSymbols)
      ) {
        this.passwordStrength = 'Medium';
      } else {
        this.passwordStrength = 'Easy';
      }
    } else {
      this.isLongEnough = false;
      this.passwordStrength = '';
    }
  }
}
