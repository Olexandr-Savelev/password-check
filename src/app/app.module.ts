import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IndicatorComponent } from './indicator/indicator.component';
import { PasswordService } from './password.service';

@NgModule({
  declarations: [AppComponent, IndicatorComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
