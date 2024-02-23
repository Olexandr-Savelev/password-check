import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PasswordState {
  isEmpty: boolean;
  isLongEnough: boolean;
  passwordStrength: string;
}

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private _passwordState = new BehaviorSubject<PasswordState>({
    isEmpty: true,
    isLongEnough: false,
    passwordStrength: '',
  });

  get passwordState(): Observable<PasswordState> {
    return this._passwordState.asObservable();
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
    this._passwordState.next({ isEmpty, isLongEnough, passwordStrength });
  }
}
