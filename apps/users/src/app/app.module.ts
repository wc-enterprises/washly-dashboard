import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgImageSliderModule } from 'ng-image-slider';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppsettingpageComponent } from './appsettingpage/appsettingpage.component';
import { CampaignEditpageComponent } from './campaign-editpage/campaign-editpage.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ServiceEditpageComponent } from './service-editpage/service-editpage.component';
import { DeleteBoxComponent } from './delete-box/delete-box.component';
import { NavBarComponent } from './utils/nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { CampaignComponent } from './campaign/campaign.component';
import { BookingComponent } from './booking/booking.component';
import { BookingDetailsComponent } from './utils/booking-details/booking-details.component';
import { BillDetailsComponent } from './booking-details/booking-details.component';
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
    CampaignComponent,
    BookingComponent,
    BookingDetailsComponent,
    BillDetailsComponent,
  ],

  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    MatInputModule,
    NgImageSliderModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
