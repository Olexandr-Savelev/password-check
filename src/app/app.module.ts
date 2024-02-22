import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IndicatorComponent } from './indicator/indicator.component';
import { PasswordService } from './password.service';
import { PasswordIndicatorsComponent } from './password-indicators/password-indicators.component';
import { PasswordInputComponent } from './password-input/password-input.component';

@NgModule({
  declarations: [AppComponent, IndicatorComponent, PasswordIndicatorsComponent, PasswordInputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
