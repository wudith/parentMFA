import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Constants } from './Constants';
import { EmptyComponent } from './empty/empty.component';
import { ConfigComponent } from './config/config.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    ConfigComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
