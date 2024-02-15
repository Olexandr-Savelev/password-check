import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss'],
})
export class IndicatorComponent implements OnChanges {
  @Input() id!: number;
  @Input() passwordValue: string = '';

  isEmpty: boolean = true;
  isLongEnought: boolean = false;

  isEasy: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;

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

  ngOnChanges(): void {
    if (this.passwordValue.length !== 0) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }

    if (this.passwordValue.length >= 8) {
      this.isLongEnought = true;

      const { containDigits, containLetters, containSymbols } =
        this.checkPasswordCharacters(this.passwordValue);

      if (containDigits && containLetters && containSymbols) {
        this.isStrong = true;
        this.isMedium = false;
        this.isEasy = false;
      } else if (
        (containDigits && containLetters) ||
        (containLetters && containSymbols) ||
        (containDigits && containSymbols)
      ) {
        this.isStrong = false;
        this.isMedium = true;
        this.isEasy = false;
      } else {
        this.isStrong = false;
        this.isMedium = false;
        this.isEasy = true;
      }
    } else {
      this.isLongEnought = false;
      this.isStrong = false;
      this.isMedium = false;
      this.isEasy = false;
    }
  }
}
