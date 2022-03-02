import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapsuleListComponent } from './components/capsule-list/capsule-list.component';
import { CapsuleDetailComponent } from './components/capsule-list/capsule-detail/capsule-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CapsuleListComponent,
    CapsuleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
