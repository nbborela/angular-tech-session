import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QpCovDetailsComponent } from './qp-cov-details/qp-cov-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QpCovDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
