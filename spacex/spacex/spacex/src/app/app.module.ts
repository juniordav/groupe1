import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapsuleService } from './services/capsuleservice.service';
import { LauncheService } from './services/launcheservice.service';
import { AppConfig } from './app-config';
import { CapsuleListComponent } from './components/capsule-list/capsule-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CapsuleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [LauncheService, CapsuleService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
