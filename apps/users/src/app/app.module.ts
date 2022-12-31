import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatInputModule } from '@angular/material/input';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppsettingpageComponent } from './appsettingpage/appsettingpage.component';
import { CampaignEditpageComponent } from './campaign-editpage/campaign-editpage.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ServiceEditpageComponent } from './service-editpage/service-editpage.component';
import { DeleteBoxComponent } from './delete-box/delete-box.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,

    LoginpageComponent,
    AppsettingpageComponent,
    CampaignEditpageComponent,
    ServicePageComponent,
    ServiceEditpageComponent,
    DeleteBoxComponent,
    NavBarComponent,
    HeaderComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    MatInputModule,
    NgImageSliderModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
