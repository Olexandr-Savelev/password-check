import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface PasswordState {
  isEmpty: boolean;
  isLongEnough: boolean;
  passwordStrength: string;
}

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  passwordState = new BehaviorSubject<PasswordState>({
    isEmpty: true,
    isLongEnough: false,
    passwordStrength: '',
  });

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

  onChange(value: string): void {
    const isEmpty = value.length === 0;
    const isLongEnough = value.length >= 8;

    let passwordStrength = '';
    if (isLongEnough) {
      const { containDigits, containLetters, containSymbols } =
        this.checkPasswordCharacters(value);

      if (containDigits && containLetters && containSymbols) {
        passwordStrength = 'Strong';
      } else if (
        (containDigits && containLetters) ||
        (containLetters && containSymbols) ||
        (containDigits && containSymbols)
      ) {
        passwordStrength = 'Medium';
      } else {
        passwordStrength = 'Easy';
      }
    }
    this.passwordState.next({ isEmpty, isLongEnough, passwordStrength });
  }
}
