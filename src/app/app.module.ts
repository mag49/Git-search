import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {formsModule} from'@angular/forms';
import {profileService} from './services/profile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule;
    AppRoutingModule
  ],
  providers: [profileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
