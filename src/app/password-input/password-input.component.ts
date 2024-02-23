import { Component, forwardRef } from '@angular/core';
import { PasswordService } from '../password.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  value = '';
  isHide: boolean = true;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(private passwordService: PasswordService) {}

  togglePasswordVisibility() {
    this.isHide = !this.isHide;
  }
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onPasswordChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
    this.passwordService.onChange(value);
  }
}
