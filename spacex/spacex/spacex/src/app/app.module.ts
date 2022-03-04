import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapsuleService } from './services/capsule.service';
import { LaunchService } from './services/launch_service';
import { AppConfig } from './app-config';
import { CapsuleListComponent } from './components/capsule-list/capsule-list.component';
import { CapsuleDetailComponent } from './components/capsule-list/capsule-detail/capsule-detail.component';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { LaunchDetailComponent } from './components/launch-list/launch-detail/launch-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AbstractService } from './services/abstract.service';

@NgModule({
  declarations: [
    AppComponent,
    CapsuleListComponent,
    CapsuleDetailComponent,
    LaunchListComponent,
    LaunchDetailComponent,
    HomepageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  
  providers: [LaunchService,AbstractService, CapsuleService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
